import type { NutritionInfo } from "@/data/recipes/types";

const items: { key: keyof NutritionInfo; label: string; unit: string }[] = [
  { key: "calories", label: "Calories", unit: "kcal" },
  { key: "protein", label: "Protein", unit: "g" },
  { key: "carbs", label: "Carbs", unit: "g" },
  { key: "fat", label: "Fat", unit: "g" },
  { key: "fiber", label: "Fiber", unit: "g" },
];

export function NutritionCard({ nutrition }: { nutrition: NutritionInfo }) {
  return (
    <div className="rounded-xl border border-stone-200 bg-white p-6">
      <div className="grid grid-cols-3 sm:grid-cols-5 gap-4">
        {items.map((item) => (
          <div key={item.key} className="text-center">
            <p className="text-xl sm:text-2xl font-bold text-stone-900">
              {nutrition[item.key]}
              <span className="text-xs font-normal text-stone-400 ml-0.5">{item.unit}</span>
            </p>
            <p className="text-xs text-stone-400 mt-1">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
