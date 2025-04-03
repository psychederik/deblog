function LeftSidebar({ windowWidth, offset }) {
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
                     hidden lg:block
                  "
         style={{
            left: `calc(50% - ${windowWidth >= 768 ? offset : 0}px)`,
            top: 0,
            maxHeight: '600px',
         }}
      >
         <h3 className="uppercase text-sm font-semibold text-white/60 mb-2">
            Blog Posts
         </h3>
         <p>Blog Posts Sidebar (Placeholder)</p>
      </aside>
   );
}

export default LeftSidebar;
