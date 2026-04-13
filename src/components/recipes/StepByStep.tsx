import type { RecipeStep } from "@/data/recipes/types";

export function StepByStep({ steps }: { steps: RecipeStep[] }) {
  return (
    <div className="space-y-6">
      {steps.map((s) => (
        <div key={s.step} className="flex gap-4">
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-orange-500 text-white text-sm font-bold shrink-0 mt-0.5">
            {s.step}
          </span>
          <div className="flex-1 min-w-0">
            <p className="text-base text-stone-800 leading-relaxed">{s.instruction}</p>
            {s.tip && (
              <div className="mt-3 rounded-xl bg-orange-50 px-4 py-3">
                <p className="text-sm text-stone-600 leading-relaxed">
                  <span className="font-semibold">Tip:</span> {s.tip}
                </p>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
