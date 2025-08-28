import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { 
      firstName, 
      lastName, 
      country, 
      email, 
      phoneCode, 
      phone, 
      comment, 
      startDate, 
      endDate, 
      room, 
      nights,
      guestCount 
    } = body;

    // Configuration du transporteur Gmail
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER, // Votre adresse Gmail
        pass: process.env.GMAIL_APP_PASSWORD, // Votre mot de passe d'application
      },
    });

    // Template HTML pour l'email
    const htmlTemplate = `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background-color: #7A9E7E; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
          .content { background-color: #f9f9f9; padding: 20px; border-radius: 0 0 8px 8px; }
          .info-row { margin: 10px 0; padding: 10px; background-color: white; border-radius: 4px; }
          .label { font-weight: bold; color: #5B7B5E; }
          .room-info { background-color: #E8F1E4; padding: 15px; border-radius: 8px; margin: 15px 0; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>🏨 Nouvelle Demande de Réservation</h1>
          </div>
          <div class="content">
            <h2>Informations du Client</h2>
            <div class="info-row">
              <span class="label">Nom complet:</span> ${firstName} ${lastName}
            </div>
            <div class="info-row">
              <span class="label">Email:</span> ${email}
            </div>
            <div class="info-row">
              <span class="label">Téléphone:</span> ${phoneCode} ${phone}
            </div>
            <div class="info-row">
              <span class="label">Pays:</span> ${country}
            </div>
            
            <h2>Détails de la Réservation</h2>
            <div class="info-row">
              <span class="label">Date d'arrivée:</span> ${new Date(startDate).toLocaleDateString('fr-FR')}
            </div>
            <div class="info-row">
              <span class="label">Date de départ:</span> ${new Date(endDate).toLocaleDateString('fr-FR')}
            </div>
            <div class="info-row">
              <span class="label">Nombre de nuits:</span> ${nights}
            </div>
            <div class="info-row">
              <span class="label">Nombre de personnes:</span> ${guestCount}
            </div>
            
            <div class="room-info">
              <h3>Chambre Sélectionnée</h3>
              <div><span class="label">Type:</span> ${room.name}</div>
              <div><span class="label">Description:</span> ${room.description}</div>
              <div><span class="label">Prix par nuit:</span> ${room.price}€</div>
              <div><span class="label">Capacité:</span> ${room.capacity} personnes</div>
              <div><span class="label">Prix total estimé:</span> ${room.price * nights}€</div>
            </div>
            
            ${comment ? `
            <div class="info-row">
              <span class="label">Commentaires/Demandes spéciales:</span><br>
              ${comment}
            </div>
            ` : ''}
            
            <div style="margin-top: 20px; padding: 15px; background-color: #fff3cd; border-radius: 8px;">
              <strong>⚠️ Action requise:</strong> Veuillez contacter le client pour confirmer la réservation.
            </div>
          </div>
        </div>
      </body>
      </html>
    `;

    // Options de l'email
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER, // Envoyer à vous-même
      subject: `Nouvelle réservation - ${firstName} ${lastName} (${new Date(startDate).toLocaleDateString('fr-FR')} - ${new Date(endDate).toLocaleDateString('fr-FR')})`,
      html: htmlTemplate,
    };

    // Envoi de l'email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ 
      success: true, 
      message: 'Email envoyé avec succès' 
    });

  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: 'Erreur lors de l\'envoi de l\'email',
        error: error instanceof Error ? error.message : 'Erreur inconnue'
      },
      { status: 500 }
    );
  }
}
