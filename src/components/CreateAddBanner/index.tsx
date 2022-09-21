import { MagnifyingGlassPlus } from "phosphor-react";

export function CreateAddBanner() {
  return (
    <div className='bg-[#2A2634] px-8 py-6 flex justify-between items-center'>
      <div>
        <strong className='text-2xl text-white font-black block'>Don't find your duo?</strong>
        <span className='text-zinc-400 block'>Make a AD to find players!</span>
      </div>

      <button className='py-3 px-4 bg-violet-500 hover:bg-violet-600 text-white rounded flex items-center gap-3'>
        <MagnifyingGlassPlus size={24} />
        Create a AD
      </button>
    </div>
  );
}