


export default function Navbar() {
  return (
    <div className="border-b">
    <div className="flex h-16 items-center px-4">
      <MainNav className="mx-6" />
      <div className="ml-auto flex items-center space-x-4">
        <ModeToggle/>
        <UserButton afterSignOutUrl="/"/>
      </div>
    </div>
  </div>
  )
}
