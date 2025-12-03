
import { Breadcrumbs } from '@/components/ui/breadcrumbs';

export default function DisclaimerPage() {
  return (
    <main className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Disclaimer' },
          ]}
        />
        <div className="mt-8 bg-secondary p-6 md:p-10 rounded-2xl shadow-sm">
          <div className="prose max-w-none prose-headings:font-headline prose-headings:text-primary prose-a:text-primary hover:prose-a:underline prose-strong:text-foreground">
            
            <div className="text-center mb-10">
                <h1 className='text-3xl md:text-4xl'>Disclaimer</h1>
                <p className="lead">Effective Date: 14 August 2025</p>
            </div>

            <div className="text-justify space-y-4">
                <h2 className='text-2xl'>General Disclaimer</h2>
                <p>
                The information contained on <b>www.cacsfinaccservices.com</b> is
                for general informational purposes only. CACS FinAcc Services™
                strives to ensure that the information is accurate and up-to-date,
                but makes no warranties or representations regarding the
                completeness, accuracy, or reliability of the content. Any
                reliance you place on such information is strictly at your own
                risk. CACS FinAcc Services™ will not be liable for any loss or
                damage arising from the use of this Website.
                </p>
                
                <h2 className='text-2xl'>Professional Advice Disclaimer</h2>
                <p>
                The content is not intended to replace professional advice. Please
                consult us for advice specific to your circumstances.
                </p>

                <h2 className='text-2xl mt-8'>Intellectual Property & Trademark Policy</h2>
                
                <h3>1. Trademarks</h3>
                <p>
                “CACS FinAcc Services” and the CACS FinAcc logo are trademarks/™
                of CACS FinAcc. Use of our trademarks without permission is
                prohibited.
                </p>
                
                <h3>2. Copyright</h3>
                <p>
                Copyright © 2025 CACS FinAcc Services™. All rights reserved.
                Unauthorised copying, reproduction, distribution, or modification
                of any Website content, including downloadable materials, is
                prohibited without prior written consent.
                </p>
                
                <h3>3. Fair Use</h3>
                <p>
                Limited fair use of content for personal, non-commercial purposes
                is permitted, provided proper attribution is given to CACS FinAcc
                Services™.
                </p>
                
                <h3>4. Reporting Infringements</h3>
                <p>
                If you believe your rights have been infringed by content on this
                Website, send an email to{' '}
                <a href="mailto:info@cacsfinaccservices.com">
                    info@cacsfinaccservices.com
                </a>
                {' '}with the following:
                </p>
                <ul>
                <li>Your name and contact details</li>
                <li>The URL(s) of the infringing material</li>
                <li>A description of the alleged infringement</li>
                <li>
                    A statement of good-faith belief that the use is unauthorised
                </li>
                <li>
                    A declaration that the information provided is accurate and that
                    you are the rights holder or authorised to act on their behalf
                </li>
                </ul>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}
