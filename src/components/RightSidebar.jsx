function RightSidebar({ windowWidth, offset }) {
   return (
      <aside
         className="
                     sticky
                     border border-white/20
                     w-[200px]
                     p-3 bg-black/10
                     rounded-lg
                     text-white/90
                     overflow-y-auto
                     hidden md:block
                  "
         style={{
            right: `calc(50% - ${windowWidth >= 768 ? offset : 0}px)`,
            top: 0,
            maxHeight: '600px',
         }}
      >
         <h3 className="uppercase text-sm font-semibold text-white/60 mb-2">
            Table of Contents
         </h3>
         <p>Test Index (TOC Placeholder)</p>
      </aside>
   );
}

export default RightSidebar;
