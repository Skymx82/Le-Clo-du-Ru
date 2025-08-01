"use client";

import React from "react";

interface StepIndicatorProps {
  currentStep: number;
  totalSteps: number;
}

export default function StepIndicator({ currentStep, totalSteps }: StepIndicatorProps) {
  const steps = [
    { number: 1, label: "Dates" },
    { number: 2, label: "Personnes" },
    { number: 3, label: "Chambre" },
    { number: 4, label: "Contact" },
  ];

  return (
    <div className="flex justify-between mb-6 sm:mb-8">
      {steps.slice(0, totalSteps).map((step, index) => (
        <React.Fragment key={index}>
          <div className="flex flex-col items-center">
            <div className={`flex flex-col items-center ${index + 1 === currentStep ? 'text-[#5B7B5E]' : 'text-gray-400'}`}>
              <div className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs sm:text-sm font-medium ${index + 1 === currentStep ? 'bg-[#E8F1E4] text-[#5B7B5E]' : index + 1 < currentStep ? 'bg-[#7A9E7E] text-white' : 'bg-gray-200'}`}>
                {index + 1}
              </div>
              <span className="text-[10px] sm:text-xs mt-1 hidden xs:block">
                {step.label}
              </span>
            </div>
          </div>
          {index < totalSteps - 1 && (
            <div className="relative flex-grow mx-1 sm:mx-2">
              <div className="absolute top-3 sm:top-4 w-full h-0.5 bg-gray-200">
                <div 
                  className={`h-full bg-[#7A9E7E] transition-all duration-500`} 
                  style={{ width: currentStep > index + 1 ? '100%' : '0%' }}
                ></div>
              </div>
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}
