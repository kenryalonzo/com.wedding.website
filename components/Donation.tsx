import { CreditCard, Wallet } from "lucide-react";

export default function Donation() {
  return (
    <section id="donation" className="py-20 bg-stone-50">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl font-serif text-royal-blue mb-6">
          Liste de Mariage
        </h2>
        <p className="text-stone-600 mb-12 max-w-2xl mx-auto">
          Votre présence est notre plus beau cadeau. Si vous souhaitez néanmoins
          participer à notre nouvelle vie, voici comment vous pouvez contribuer
          :
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* PayPal */}
          <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-gold hover:shadow-xl transition-shadow">
            <Wallet className="w-12 h-12 text-royal-blue mx-auto mb-4" />
            <h3 className="text-xl font-bold font-serif text-stone-800 mb-2">
              PayPal
            </h3>
            <p className="text-stone-500 mb-6 text-sm">
              Contribution rapide et sécurisée
            </p>
            <a
              href="https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=Kamsicedric@gmail.com&item_name=Mariage+Cedric+et+Karelle&currency_code=EUR"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#0070BA] text-white px-6 py-3 rounded-full font-bold hover:bg-[#005ea6] transition-colors"
            >
              Faire un don via PayPal
            </a>
            <p className="mt-4 text-xs text-stone-400 font-mono">
              Kamsicedric@gmail.com
            </p>
          </div>

          {/* Bank Transfer */}
          <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-royal-blue hover:shadow-xl transition-shadow">
            <CreditCard className="w-12 h-12 text-gold mx-auto mb-4" />
            <h3 className="text-xl font-bold font-serif text-stone-800 mb-2">
              Virement Bancaire
            </h3>
            <p className="text-stone-500 mb-6 text-sm">
              Directement sur notre compte
            </p>

            <div className="bg-stone-100 p-4 rounded text-left font-mono text-sm text-stone-700 space-y-2">
              <div className="flex justify-between">
                <span className="text-stone-400">IBAN:</span>
                <span className="font-bold select-all">
                  DE34 2905 0101 0083 4930 49
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-400">Titulaire:</span>
                <span>Cedric Kamsi</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
