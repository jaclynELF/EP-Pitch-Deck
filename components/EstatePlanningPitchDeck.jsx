import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, FileText, Scale, Users, DollarSign } from "lucide-react";

export default function EstatePlanningPitchDeck() {
  return (
    <div className="p-6 space-y-8">
      <h1 className="text-4xl font-bold">Estate Planning Partnership Pitch Deck</h1>

      <Card>
        <CardContent className="space-y-4 p-6">
          <h2 className="text-2xl font-semibold flex items-center gap-2">
            <Users className="w-6 h-6" /> Opportunity Overview
          </h2>
          <p>
            Partner with a national law firm to deliver attorney-led estate planning
            services. Advisors offer value-added legal protection while generating
            additional revenue—without practicing law.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="space-y-4 p-6">
          <h2 className="text-2xl font-semibold flex items-center gap-2">
            <FileText className="w-6 h-6" /> Services Offered
          </h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Revocable & Irrevocable Trusts</li>
            <li>Wills, Powers of Attorney, Living Wills</li>
            <li>Special Needs Trusts & Warranty Deeds</li>
            <li>Attorney-reviewed, state-specific documents</li>
            <li>Remote Online Notarization (RON)</li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="space-y-4 p-6">
          <h2 className="text-2xl font-semibold flex items-center gap-2">
            <DollarSign className="w-6 h-6" /> Compensation Model
          </h2>
          <p>
            Advisors are paid a flat marketing fee (up to 18.75%) based on their
            involvement level:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Tier 1: Full Intake = $675</li>
            <li>Tier 2: Partial Intake = $450</li>
            <li>Tier 3: Referral Only = $90</li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="space-y-4 p-6">
          <h2 className="text-2xl font-semibold flex items-center gap-2">
            <Scale className="w-6 h-6" /> Legal & Ethical Compliance
          </h2>
          <p>
            All compensation complies with ABA Rules 5.4 and 7.2. No legal advice
            is provided by advisors. All legal services are performed solely by
            licensed attorneys.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="space-y-4 p-6">
          <h2 className="text-2xl font-semibold flex items-center gap-2">
            <CheckCircle className="w-6 h-6" /> Why This Works
          </h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Adds long-term value for clients</li>
            <li>Strengthens retention and referrals</li>
            <li>Compliant, turnkey revenue stream</li>
            <li>Easy to integrate into any advisory model</li>
          </ul>
          <Button className="mt-4">Request Onboarding</Button>
        </CardContent>
      </Card>
    </div>
  );
}
