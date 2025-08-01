import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mentions Légales | Tolarys',
  description: 'Mentions légales et informations concernant le site Tolarys',
};

export default function MentionsLegales() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-semibold text-[#5B7B5E] mb-6">Mentions Légales</h1>
        
        <section className="mb-8">
          <h2 className="text-xl font-medium text-[#5B7B5E] mb-3">1. Édition du site</h2>
          <p className="text-gray-700 mb-2">
            Le présent site, accessible à l'URL <span className="font-medium">www.tolarys.com</span> (le « Site »), est édité par :
          </p>
          <p className="text-gray-700 mb-2">
            <span className="font-medium">Tolarys</span>, société inscrite au RCS sous le numéro SIRET: 94208529100014, dont le siège social est situé à Le Clos du Ru, 45290 Varennes-Changy, France.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-medium text-[#5B7B5E] mb-3">2. Hébergement</h2>
          <p className="text-gray-700 mb-2">
            Le Site est hébergé par la société Vercel Inc., située 340 S Lemon Ave #4133 Walnut, CA 91789, USA, (contact : privacy@vercel.com).
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-medium text-[#5B7B5E] mb-3">3. Gestion du Site</h2>
          <p className="text-gray-700 mb-2">
            La gestion technique et éditoriale du Site est assurée par <span className="font-medium">Prestacomm</span>, société spécialisée dans la création et la gestion de sites internet.
          </p>
          <p className="text-gray-700 mb-2">
            Pour toute question relative au Site, vous pouvez contacter le service client à l'adresse email suivante : contact@prestacomm.com.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-medium text-[#5B7B5E] mb-3">4. Directeur de la publication</h2>
          <p className="text-gray-700 mb-2">
            Le Directeur de la publication du Site est Mattias Mathevon.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-medium text-[#5B7B5E] mb-3">5. Propriété intellectuelle</h2>
          <p className="text-gray-700 mb-2">
            L'ensemble du Site, y compris sa structure, son design, ses textes, ses images, ses photographies, ses illustrations, ses logos et ses éléments graphiques, est la propriété exclusive de Tolarys ou des tiers qui lui ont concédé une licence. Toute représentation, reproduction, adaptation, modification ou exploitation, totale ou partielle, du Site et/ou de son contenu et/ou des services, par quelque procédé que ce soit, sans l'autorisation préalable et écrite de Tolarys, est strictement interdite et constitue une contrefaçon sanctionnée par le Code de la propriété intellectuelle.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-medium text-[#5B7B5E] mb-3">6. Protection des données personnelles</h2>
          <p className="text-gray-700 mb-2">
            Les informations recueillies sur le Site font l'objet d'un traitement informatique destiné à Tolarys pour la gestion de sa clientèle et la prospection commerciale. Conformément à la loi « informatique et libertés » du 6 janvier 1978 modifiée et au Règlement européen n°2016/679/UE du 27 avril 2016, vous bénéficiez d'un droit d'accès, de rectification, de portabilité et d'effacement de vos données ou encore de limitation du traitement. Vous pouvez également, pour des motifs légitimes, vous opposer au traitement des données vous concernant.
          </p>
          <p className="text-gray-700 mb-2">
            Pour exercer ces droits ou pour toute question sur le traitement de vos données, vous pouvez contacter Tolarys à l'adresse email suivante : privacy@tolarys.com.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-medium text-[#5B7B5E] mb-3">7. Cookies</h2>
          <p className="text-gray-700 mb-2">
            Le Site utilise des cookies pour améliorer l'expérience de navigation des utilisateurs. Un cookie est un petit fichier texte déposé sur votre terminal (ordinateur, tablette, smartphone) lors de votre visite sur le Site. Les cookies permettent notamment de reconnaître un utilisateur lors de sa connexion, de mémoriser ses préférences de navigation, et de lui proposer des contenus adaptés à ses centres d'intérêt.
          </p>
          <p className="text-gray-700 mb-2">
            Vous pouvez configurer votre navigateur pour refuser l'installation de cookies ou supprimer les cookies déjà installés. Toutefois, le refus d'installation d'un cookie peut entraîner l'impossibilité d'accéder à certaines fonctionnalités du Site.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-medium text-[#5B7B5E] mb-3">8. Liens hypertextes</h2>
          <p className="text-gray-700 mb-2">
            Le Site peut contenir des liens hypertextes vers d'autres sites internet. Tolarys n'exerce aucun contrôle sur ces sites et ne saurait être tenu responsable de leur contenu.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-medium text-[#5B7B5E] mb-3">9. Droit applicable et juridiction compétente</h2>
          <p className="text-gray-700 mb-2">
            Les présentes mentions légales sont régies par le droit français. En cas de litige, les tribunaux français seront seuls compétents.
          </p>
        </section>

        <div className="text-gray-500 text-sm mt-10">
          <p>Dernière mise à jour : 01/08/2025</p>
        </div>
      </div>
    </div>
  );
}
