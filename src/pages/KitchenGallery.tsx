import React from 'react';
import { kitchen, kitchendesign, kitchenDesign2, kitchenDesign3, kitchenDesign4 } from '../assets/images';

const kitchenGallery = [
  {
    id: 1,
    title: "Minimalist Luxury",
    description: "A seamless blend of matte black cabinetry and marble countertops, featuring built-in appliances and ambient lighting.",
    imageUrl: kitchen,
  },
  {
    id: 2,
    title: "Warm Modern Retreat",
    description: "Natural wood tones meet sleek white finishes in this open-plan kitchen designed for functionality and comfort.",
    imageUrl: kitchendesign,
  },
  {
    id: 3,
    title: "Urban Elegance",
    description: "Glossy grey cabinets, stainless steel finishes, and bold geometric lighting define this stylish urban kitchen.",
    imageUrl: "https://images.pexels.com/photos/373548/pexels-photo-373548.jpeg",
  },
  {
    id: 4,
    title: "Scandinavian Simplicity",
    description: "Clean lines, soft hues, and functional shelving make this kitchen a calm and airy culinary space.",
    imageUrl: kitchenDesign2,
  },
  {
    id: 5,
    title: "Urban Elegance",
    description: "Glossy grey cabinets, stainless steel finishes, and bold geometric lighting define this stylish urban kitchen.",
    imageUrl: kitchenDesign4,
  },
  {
    id: 6,
    title: "Urban Elegance",
    description: "Glossy grey cabinets, stainless steel finishes, and bold geometric lighting define this stylish urban kitchen.",
    imageUrl: kitchenDesign3,
  },
];

const ModernKitchenGallery = () => {
  return (
    <section className="px-6 py-12 bg-gray-50">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-10 mt-14">Modern Kitchen Gallery</h2>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
        {kitchenGallery.map((kitchen) => (
          <div key={kitchen.id} className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
            <img src={kitchen.imageUrl} alt={kitchen.title} className="w-full h-48 object-cover" />
            <div className="p-5">
              <h3 className="text-xl font-semibold text-gray-800">{kitchen.title}</h3>
              <p className="mt-2 text-gray-600 text-sm">{kitchen.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ModernKitchenGallery;
