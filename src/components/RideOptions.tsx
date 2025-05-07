
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Users, User } from "lucide-react";

interface RideOption {
  id: string;
  name: string;
  description: string;
  price: number;
  time: string;
  icon: React.ReactNode;
}

interface RideOptionsProps {
  options: RideOption[];
  selectedOption: string;
  onSelect: (optionId: string) => void;
}

const RideOptions: React.FC<RideOptionsProps> = ({
  options,
  selectedOption,
  onSelect,
}) => {
  return (
    <Card className="w-full shadow-md">
      <CardContent className="pt-6">
        <RadioGroup value={selectedOption} onValueChange={onSelect}>
          <div className="space-y-4">
            {options.map((option) => (
              <div
                key={option.id}
                className={`flex items-center space-x-3 border rounded-lg p-4 cursor-pointer transition-all ${
                  selectedOption === option.id
                    ? "border-primary bg-primary/5"
                    : "border-gray-200 hover:bg-gray-50"
                }`}
                onClick={() => onSelect(option.id)}
              >
                <RadioGroupItem value={option.id} id={`option-${option.id}`} />
                <div className="flex-shrink-0 text-gray-500">
                  {option.icon}
                </div>
                <div className="flex-grow">
                  <Label
                    htmlFor={`option-${option.id}`}
                    className="text-base font-medium"
                  >
                    {option.name}
                  </Label>
                  <p className="text-sm text-gray-500">{option.description}</p>
                </div>
                <div className="flex flex-col items-end">
                  <span className="font-semibold">${option.price.toFixed(2)}</span>
                  <span className="text-xs text-gray-500">{option.time}</span>
                </div>
              </div>
            ))}
          </div>
        </RadioGroup>
      </CardContent>
    </Card>
  );
};

export default RideOptions;
