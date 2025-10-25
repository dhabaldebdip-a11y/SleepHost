import React from "react";

// SleepHost - Single-file React Landing + Pricing (TailwindCSS) // Default export: SleepHostLanding // Usage: drop into a React app (Create React App / Next.js) with TailwindCSS enabled.

export default function SleepHostLanding() { return ( <div className="min-h-screen bg-gray-50 text-gray-900 antialiased"> {/* Header */} <header className="bg-white shadow-sm"> <div className="max-w-6xl mx-auto px-6 lg:px-8 py-4 flex items-center justify-between"> <div className="flex items-center gap-4"> <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-indigo-600 to-purple-500 flex items-center justify-center text-white font-bold">SH</div> <div> <h1 className="text-lg font-semibold">SleepHost</h1> <p className="text-xs text-gray-500">Reliable VPS | 24/7 Uptime | Fast NVMe</p> </div> </div>

<nav className="hidden md:flex items-center gap-6 text-sm">
        <a href="#pricing" className="hover:text-indigo-600">Pricing</a>
        <a href="#features" className="hover:text-indigo-600">Features</a>
        <a href="#faq" className="hover:text-indigo-600">FAQ</a>
        <a href="#contact" className="px-4 py-2 rounded-lg bg-indigo-600 text-white shadow-sm">Get Started</a>
      </nav>

      <div className="md:hidden">
        <button className="px-3 py-2 rounded-md bg-indigo-600 text-white text-sm">Menu</button>
      </div>
    </div>
  </header>

  {/* Hero */}
  <section className="max-w-6xl mx-auto px-6 lg:px-8 py-14 grid lg:grid-cols-2 gap-10 items-center">
    <div>
      <h2 className="text-4xl lg:text-5xl font-extrabold leading-tight">VPS hosting that actually sleeps so your servers stay awake.</h2>
      <p className="mt-4 text-lg text-gray-600">Fast NVMe storage, DDOS protection, IPv4 & IPv6 support — perfect for game servers, bots, apps, and personal projects.</p>

      <div className="mt-6 flex flex-wrap gap-3">
        <a href="#pricing" className="inline-block px-5 py-3 bg-indigo-600 text-white rounded-2xl font-medium shadow">View Plans</a>
        <a href="#contact" className="inline-block px-5 py-3 border border-gray-200 rounded-2xl text-gray-700">Contact Sales</a>
      </div>

      <ul className="mt-6 grid sm:grid-cols-2 gap-3 text-sm text-gray-600">
        <li>✅ 24/7 Monitoring</li>
        <li>✅ Easy control panel (SSH & Web)</li>
        <li>✅ Instant setup</li>
        <li>✅ Full root access</li>
      </ul>
    </div>

    <div>
      <div className="bg-white rounded-2xl shadow-md p-6">
        <p className="text-sm text-gray-500">Popular</p>
        <h3 className="mt-2 text-2xl font-semibold">Starter VPS</h3>
        <p className="mt-1 text-gray-600">Perfect for small bots & projects</p>

        <div className="mt-4 flex items-end gap-4">
          <div className="text-3xl font-extrabold">₹249</div>
          <div className="text-sm text-gray-500">/ month</div>
        </div>

        <ul className="mt-4 text-sm text-gray-700 space-y-2">
          <li>• 1 vCPU • 1 GB RAM • 20 GB NVMe</li>
          <li>• 1 IPv4 • Unlimited bandwidth</li>
          <li>• 24/7 Support</li>
        </ul>

        <div className="mt-6">
          <a className="inline-block px-5 py-3 bg-indigo-600 text-white rounded-lg font-medium">Buy Now</a>
        </div>
      </div>
    </div>
  </section>

  {/* Pricing */}
  <section id="pricing" className="bg-white border-t py-14">
    <div className="max-w-6xl mx-auto px-6 lg:px-8">
      <div className="text-center">
        <h3 className="text-3xl font-extrabold">VPS Plans</h3>
        <p className="mt-2 text-gray-600">Transparent pricing for everyone — pay monthly or yearly.</p>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {/* Card 1 */}
        <div className="p-6 rounded-2xl border shadow-sm bg-gray-50">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="text-lg font-semibold">Basic</h4>
              <p className="text-sm text-gray-500">For light projects</p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-extrabold">₹199</div>
              <div className="text-xs text-gray-500">/mo</div>
            </div>
          </div>

          <ul className="mt-4 space-y-2 text-sm text-gray-700">
            <li>1 vCPU • 512 MB RAM</li>
            <li>10 GB NVMe</li>
            <li>1 IPv4</li>
            <li>Instant setup</li>
          </ul>

          <div className="mt-6">
            <a className="w-full block text-center px-4 py-2 rounded-lg bg-indigo-600 text-white font-medium">Select</a>
          </div>
        </div>

        {/* Card 2 - Popular */}
        <div className="p-6 rounded-2xl border-2 border-indigo-100 shadow-lg bg-white transform lg:scale-105">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="text-lg font-semibold">Standard</h4>
              <p className="text-sm text-gray-500">Most popular</p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-extrabold">₹449</div>
              <div className="text-xs text-gray-500">/mo</div>
            </div>
          </div>

          <ul className="mt-4 space-y-2 text-sm text-gray-700">
            <li>2 vCPU • 2 GB RAM</li>
            <li>40 GB NVMe</li>
            <li>1 IPv4 + IPv6</li>
            <li>Daily backups</li>
          </ul>

          <div className="mt-6">
            <a className="w-full block text-center px-4 py-2 rounded-lg bg-indigo-600 text-white font-medium">Select</a>
          </div>
        </div>

        {/* Card 3 */}
        <div className="p-6 rounded-2xl border shadow-sm bg-gray-50">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="text-lg font-semibold">Pro</h4>
              <p className="text-sm text-gray-500">For bigger needs</p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-extrabold">₹999</div>
              <div className="text-xs text-gray-500">/mo</div>
            </div>
          </div>

          <ul className="mt-4 space-y-2 text-sm text-gray-700">
            <li>4 vCPU • 8 GB RAM</li>
            <li>160 GB NVMe</li>
            <li>2 IPv4 • Premium network</li>
            <li>Priority support</li>
          </ul>

          <div className="mt-6">
            <a className="w-full block text-center px-4 py-2 rounded-lg bg-indigo-600 text-white font-medium">Select</a>
          </div>
        </div>
      </div>

      <p className="mt-6 text-sm text-gray-500">All prices shown in INR. Billing in USD available on request. Taxes may apply.</p>
    </div>
  </section>

  {/* Features */}
  <section id="features" className="max-w-6xl mx-auto px-6 lg:px-8 py-14">
    <h3 className="text-2xl font-bold">Why SleepHost?</h3>
    <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="p-4 bg-white rounded-lg shadow-sm">
        <h4 className="font-semibold">Fast NVMe</h4>
        <p className="text-sm text-gray-600 mt-2">Low latency and high I/O for databases, bots, and game servers.</p>
      </div>
      <div className="p-4 bg-white rounded-lg shadow-sm">
        <h4 className="font-semibold">DDoS Protection</h4>
        <p className="text-sm text-gray-600 mt-2">Automatic mitigation to keep your services online.</p>
      </div>
      <div className="p-4 bg-white rounded-lg shadow-sm">
        <h4 className="font-semibold">Full Root Access</h4>
        <p className="text-sm text-gray-600 mt-2">Install what you want, configure how you want.</p>
      </div>
      <div className="p-4 bg-white rounded-lg shadow-sm">
        <h4 className="font-semibold">99.99% Uptime</h4>
        <p className="text-sm text-gray-600 mt-2">Reliable infrastructure backed by monitoring and auto-restarts.</p>
      </div>
      <div className="p-4 bg-white rounded-lg shadow-sm">
        <h4 className="font-semibold">Easy SSH & Control Panel</h4>
        <p className="text-sm text-gray-600 mt-2">One-click access and panel support for quick management.</p>
      </div>
      <div className="p-4 bg-white rounded-lg shadow-sm">
        <h4 className="font-semibold">Daily Backups</h4>
        <p className="text-sm text-gray-600 mt-2">Optional automatic backups so you never lose work.</p>
      </div>
    </div>
  </section>

  {/* FAQ */}
  <section id="faq" className="bg-white border-t py-12">
    <div className="max-w-6xl mx-auto px-6 lg:px-8">
      <h3 className="text-2xl font-bold">FAQ</h3>
      <div className="mt-6 grid gap-4">
        <details className="p-4 rounded-lg bg-gray-50"> 
          <summary className="cursor-pointer font-medium">Kya setup instant hota hai?</summary>
          <p className="mt-2 text-sm text-gray-600">Haan — payment confirm hote hi VM automatic create ho jati hai aur SSH details mail/console pe mil jayenge.</p>
        </details>

        <details className="p-4 rounded-lg bg-gray-50"> 
          <summary className="cursor-pointer font-medium">IPv4 milega?</summary>
          <p className="mt-2 text-sm text-gray-600">Haan, har plan me kam se kam 1 IPv4 included rehta hai (jaha mention kiya gaya ho).</p>
        </details>

        <details className="p-4 rounded-lg bg-gray-50"> 
          <summary className="cursor-pointer font-medium">Refund policy kaise hai?</summary>
          <p className="mt-2 text-sm text-gray-600">7-day refund window for unused services. Custom terms for yearly plans.</p>
        </details>
      </div>
    </div>
  </section>

  {/* Contact / CTA */}
  <footer id="contact" className="max-w-6xl mx-auto px-6 lg:px-8 py-12">
    <div className="grid md:grid-cols-2 gap-8 items-center">
      <div>
        <h3 className="text-2xl font-bold">Ready to start?</h3>
        <p className="mt-2 text-gray-600">Koi bhi doubt ho to bhej do message — hum help karenge setup me.</p>

        <div className="mt-4 flex gap-3">
          <a href="mailto:sales@sleephost.example" className="px-4 py-2 rounded-lg bg-indigo-600 text-white inline-block">sales@sleephost.example</a>
          <a href="tel:+911234567890" className="px-4 py-2 rounded-lg border">Call Us</a>
        </div>
      </div>

      <div>
        <div className="bg-white rounded-lg shadow p-6">
          <h4 className="font-semibold">Quick quote</h4>
          <p className="text-sm text-gray-600 mt-2">Choose a plan and we will send invoice link.</p>

          <form className="mt-4 grid gap-3">
            <input className="px-3 py-2 border rounded" placeholder="Name" />
            <input className="px-3 py-2 border rounded" placeholder="Email" />
            <select className="px-3 py-2 border rounded">
              <option>Basic - ₹199/mo</option>
              <option>Standard - ₹449/mo</option>
              <option>Pro - ₹999/mo</option>
            </select>
            <button className="px-4 py-2 rounded bg-indigo-600 text-white">Request Quote</button>
          </form>
        </div>
      </div>
    </div>

    <div className="mt-8 text-center text-sm text-gray-500">© {new Date().getFullYear()} SleepHost. All rights reserved.</div>
  </footer>
</div>

); }