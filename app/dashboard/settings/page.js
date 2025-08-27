import Button from "@/app/components/Button";

export const metadata = {
  title: "Settings Page",
  description: "Manage your application settings here",
};

const Settings = () => {
  return ( 
  <div className="p-10">
    <div className="text-4xl font-bold flex justify-center items-center">Settings</div>
    <p>lorem ipssum dolor simit</p>
    <Button> Go to analytics page</Button>
  </div>
  )
}

export default Settings;