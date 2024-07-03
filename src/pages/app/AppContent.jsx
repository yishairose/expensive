function AppContent({ children }) {
  return (
    <div className="w-full lg:ps-64 dark:bg-neutral-800  ">
      <div className="p-4 sm:p-6 space-y-4 sm:space-y-6 grid lg:grid-cols-2  gap-4 sm:gap-6">
        {children}
      </div>
    </div>
  );
}

export default AppContent;
