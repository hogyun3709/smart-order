<template>
  <div class="antialiased text-gray-900 px-6">
    <div class="max-w-xl mx-auto py-12 divide-y md:max-w-4xl">
      <div class="py12">
        <h2 class="text-2xl font-bold">UnderLine Form</h2>
        <div class="mt-8 max-w-md">
          <div class="grid grid-cols-1 gap-6">
            <label class="block" for="name">
              <span class="text-gray-700">Full name</span>
              <input
                type="text"
                class="
                  mt-0
                  block
                  w-full
                  px-0.5
                  border-0 border-b-2 border-gray-200
                  focus:ring-0 focus:border-black
                "
                placeholder
              />
            </label>
            <label class="block" for="date">
              <span class="text-gray-700">When is your Event?</span>
              <input type="date" class="mt-1 block w-full" />
            </label>
            <label class="block" for="option">
              <span class="text-gray-700">What type of event is it?</span>
              <select
                type="date"
                class="
                  block
                  w-full
                  mt-1
                  rounded-md
                  bg-gray-100
                  border-transparent
                  focus:border-gray-500 focus:bg-white focus:ring-0
                "
              >
                <option>Option 1</option>
                <option>Option 2</option>
              </select>
            </label>
            <label class="bock" for="additional detail">
              <span class="text-gray-700">Additional Detail</span>
              <textarea
                class="
                  mt-0
                  block
                  w-full
                  px-0.5
                  border-0 border-b-2 border-gray-200
                  focus:ring-0 focus:border-black
                "
              ></textarea>
            </label>
            <label class="inline-flex items-center" for="check">
              <input
                type="checkbox"
                class="
                  rounded
                  border-gray-300
                  text-indigo-600
                  shadow-sm
                  focus:border-indigo-300
                  focus:ring
                  focus:ring-offset-0
                  focus:ring-indigo-200
                  focus:ring-opacity-50
                "
              />
              <span class="ml-2">Email me news and special offers</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TailwindForm',
};
</script>

<style>
</style>
