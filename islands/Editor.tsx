/** @jsx h */
import { h } from "preact";
import { useState } from "preact/hooks";
import Banner from "@/components/Banner.tsx";

export default function () {
  const [formData, setFormData] = useState({
    name: "Fresh",
    url: "https://fresh.deno.dev",
    emoji: "",
  });

  const bind = (name: string) => ({
    value: formData[name],
    onInput: (e) => setFormData({ ...formData, [name]: e.target.value }),
  });

  return (
    <div class="grid grid-cols-3">
      <section class="p-10">
        <form onSubmit={(e) => e.preventDefault()} class="flex flex-col gap-8">
          <div>
            <label
              for="name"
              class="block text-sm font-medium text-gray-200"
            >
              Package name
            </label>
            <div class="mt-1">
              <input
                type="text"
                name="name"
                id="name"
                class="shadow-sm focus:ring-emerald-500 focus:border-emerald-500 block w-full sm:text-sm border-gray-600 rounded-md bg-gray-700"
                placeholder="Fresh"
                {...bind("name")}
              />
            </div>
          </div>

          <div>
            <label
              for="url"
              class="block text-sm font-medium text-gray-200"
            >
              URL
            </label>
            <div class="mt-1">
              <input
                type="text"
                name="url"
                id="url"
                class="shadow-sm focus:ring-emerald-500 focus:border-emerald-500 block w-full sm:text-sm border-gray-600 rounded-md bg-gray-700"
                placeholder="Fresh"
                {...bind("url")}
              />
            </div>
          </div>

          <div>
            <label
              for="emoji"
              class="block text-sm font-medium text-gray-200"
            >
              Emoji
            </label>
            <div class="mt-1">
              <input
                type="text"
                name="emoji"
                id="emoji"
                class="shadow-sm focus:ring-emerald-500 focus:border-emerald-500 block w-full sm:text-sm border-gray-600 rounded-md bg-gray-700"
                placeholder="(🔥, 🍋, etc.)"
                {...bind("emoji")}
              />
            </div>
          </div>
        </form>
      </section>

      <section class="flex grid-span-2">
        <div class="border border-gray-600 rounded-lg">
          <Banner {...formData} />
        </div>
      </section>
    </div>
  );
}
