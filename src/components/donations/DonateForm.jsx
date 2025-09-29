import { Card } from "../ui/Card";
import { Button } from "../ui/Button";

export default function DonateForm() {
  const inputClasses =
    "w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 bg-white shadow-sm";

  return (
    <Card className="p-10 bg-white rounded-3xl shadow-lg">
      <h2 className="text-2xl font-semibold mb-6">Support Alumni Network</h2>
      <form className="space-y-4 max-w-md">
        <input type="text" placeholder="Full Name" className={inputClasses} />
        <input type="email" placeholder="Email" className={inputClasses} />
        <input
          type="number"
          placeholder="Donation Amount"
          className={inputClasses}
        />
        <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl shadow hover:shadow-lg">
          Donate Now
        </Button>
      </form>
    </Card>
  );
}
