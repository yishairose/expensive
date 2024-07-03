function SidebarBtn({ children, onClick }) {
  return (
    <li onClick={onClick}>
      <span
        className="flex items-center justify-between gap-x-3.5 py-2 px-2.5 bg-gray-100 text-sm text-neutral-700 rounded-lg dark:bg-neutral-700 dark:text-white cursor-pointer"
        href="#"
      >
        {children}
      </span>
    </li>
  );
}

export default SidebarBtn;
