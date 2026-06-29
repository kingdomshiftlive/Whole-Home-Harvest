import { useEffect } from 'react';
import SEOHead from '../components/ui/SEOHead';
import './Legal.css';

export function PrivacyPolicy() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <>
      <SEOHead title="Privacy Policy — Pet Grace" canonical="/privacy-policy" />
      <div className="legal-page">
        <div className="legal-hero">
          <div className="container">
            <h1>Privacy Policy</h1>
            <p>Last updated: January 1, 2025</p>
          </div>
        </div>
        <div className="legal-body container">
          <div className="legal-content">
            <p className="legal-intro">
              Pet Grace ("we," "our," or "us") is committed to protecting your personal information. 
              This Privacy Policy explains how we collect, use, and safeguard the information you provide when visiting 
              <strong> faithwealthblueprint.com</strong>.
            </p>

            <h2>1. Information We Collect</h2>
            <p>We may collect the following types of information:</p>
            <ul>
              <li><strong>Personal Information:</strong> Name, email address, and any other details you voluntarily provide through our contact form or newsletter subscription.</li>
              <li><strong>Usage Data:</strong> Pages visited, time on site, browser type, referring URLs, and other anonymous analytics data.</li>
              <li><strong>Cookies:</strong> Small data files stored on your device that help us improve your experience. You may disable cookies in your browser settings.</li>
            </ul>

            <h2>2. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Deliver and improve our content and tools</li>
              <li>Send you our newsletter and updates (with your consent)</li>
              <li>Respond to your inquiries</li>
              <li>Analyze site performance and user experience</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2>3. Information Sharing</h2>
            <p>
              We do not sell, trade, or rent your personal information to third parties. We may share anonymized, 
              aggregated data for analytics purposes. We use trusted third-party services (such as email providers 
              and analytics platforms) that have their own privacy policies.
            </p>

            <h2>4. Cookies and Tracking</h2>
            <p>
              Our website uses cookies to enhance functionality and analyze traffic. You may opt out of cookie 
              tracking through your browser settings or the cookie banner on our site. Third-party services 
              (such as Google Analytics) may also set cookies.
            </p>

            <h2>5. Data Security</h2>
            <p>
              We implement reasonable security measures to protect your information. However, no method of 
              transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
            </p>

            <h2>6. Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Request access to or deletion of your personal data</li>
              <li>Opt out of marketing communications at any time</li>
              <li>Request correction of inaccurate information</li>
            </ul>
            <p>To exercise these rights, contact us at <a href="mailto:hello@faithwealthblueprint.com">hello@faithwealthblueprint.com</a>.</p>

            <h2>7. Children's Privacy</h2>
            <p>
              Our site is not directed at children under the age of 13. We do not knowingly collect personal 
              information from children. If you believe we have inadvertently collected such information, 
              please contact us immediately.
            </p>

            <h2>8. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Changes will be posted on this page with 
              an updated revision date. Continued use of the site constitutes acceptance of the updated policy.
            </p>

            <h2>9. Contact</h2>
            <p>
              If you have questions about this Privacy Policy, please contact us at{' '}
              <a href="mailto:hello@faithwealthblueprint.com">hello@faithwealthblueprint.com</a>.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export function Terms() {
  return (
    <>
      <SEOHead title="Terms of Use — Pet Grace" canonical="/terms" />
      <div className="legal-page">
        <div className="legal-hero">
          <div className="container">
            <h1>Terms of Use</h1>
            <p>Please read these terms carefully before using Pet Grace.</p>
          </div>
        </div>
        <div className="container legal-content">
          <div className="legal-body card">

            <div className="legal-warning-box">
              <h2>⚠️ This Is an Informational Platform Only</h2>
              <p>Pet Grace is a general information and educational resource. It is NOT a veterinary clinic, animal hospital, mental health service, or professional advisory service of any kind. No content on this site constitutes professional advice of any kind. Use of this site does not create any professional relationship between you and Pet Grace or its owners.</p>
            </div>

            <h2>1. Acceptance of Terms</h2>
            <p>By accessing or using Pet Grace ("the Site"), you agree to be bound by these Terms of Use. If you do not agree, please do not use this site. These terms apply to all visitors, users, and anyone who accesses the Site.</p>

            <h2>2. Nature of This Site — Information Only</h2>
            <p>All content on Pet Grace — including articles, tools, AI-generated responses, product recommendations, grief support resources, and the Quality of Life Assessment — is provided for <strong>general informational and educational purposes only.</strong></p>
            <p>This site does NOT provide:</p>
            <ul>
              <li>Veterinary advice, diagnosis, or treatment</li>
              <li>Medical advice of any kind</li>
              <li>Mental health counseling or therapy</li>
              <li>Professional grief counseling</li>
              <li>Legal, financial, or insurance advice</li>
            </ul>
            <p><strong>Always consult a licensed veterinarian for any decisions regarding your pet's health, care, or end-of-life choices. Always consult a licensed mental health professional for grief support needs.</strong></p>

            <h2>3. The Quality of Life Assessment Tool</h2>
            <p>The Quality of Life Assessment tool on this site is provided strictly as an educational resource based on the publicly available HHHHHMM framework developed by Dr. Alice Villalobos. By using this tool, you expressly acknowledge and agree that:</p>
            <ul>
              <li>This tool does not constitute veterinary advice or a medical assessment</li>
              <li>Results from this tool should NOT be used to make any end-of-life decision for your pet without consulting a licensed veterinarian</li>
              <li>This tool cannot account for your pet's specific medical history, condition, or individual circumstances</li>
              <li>Pet Grace, its owners, developers, and buyers bear NO responsibility or liability for any decision made based on this tool</li>
              <li>You use this tool entirely at your own risk</li>
            </ul>

            <h2>4. AI Pet Advisor</h2>
            <p>The AI Pet Advisor is powered by third-party artificial intelligence technology. By using it, you acknowledge and agree that:</p>
            <ul>
              <li>AI-generated responses are not veterinary advice and may be inaccurate, incomplete, or outdated</li>
              <li>The AI Pet Advisor cannot examine your pet, review medical records, or diagnose any condition</li>
              <li>You will NOT rely on AI responses in place of professional veterinary care</li>
              <li>In any pet emergency, you will contact a veterinarian or emergency animal hospital immediately</li>
              <li>Pet Grace and its owners bear no liability for outcomes resulting from use of AI-generated content</li>
            </ul>

            <h2>5. Grief Support Content</h2>
            <p>Pet Grace provides general grief support information and resources for informational purposes. This content is not a substitute for licensed mental health care. If you are in crisis, please contact 988 (Suicide and Crisis Lifeline) or a licensed mental health professional immediately. Pet Grace is not responsible for any decisions made based on grief support content on this site.</p>

            <h2>6. Affiliate Links and Product Recommendations</h2>
            <p>Pet Grace participates in affiliate marketing programs. Some links on this site are affiliate links — we may earn a commission when you purchase through them at no additional cost to you. Product recommendations are provided for informational purposes only. Always consult your veterinarian before changing your pet's diet, adding supplements, or making health-related product decisions. Pet Grace is not responsible for any adverse reactions or outcomes from products purchased through affiliate links.</p>

            <h2>7. No Warranties</h2>
            <p>This site and all its content are provided "as is" without warranties of any kind, express or implied. Pet Grace makes no representations or warranties about the accuracy, completeness, reliability, or suitability of any information on this site.</p>

            <h2>8. Limitation of Liability</h2>
            <p>To the maximum extent permitted by applicable law, Pet Grace, its owners, operators, contributors, successors, assigns, and any party who has purchased this site as a digital asset shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages of any kind arising from:</p>
            <ul>
              <li>Your use of or inability to use this site</li>
              <li>Any reliance on information, tools, or AI content on this site</li>
              <li>Any decision made regarding your pet's health, care, or end of life</li>
              <li>Any decision made regarding your mental health or grief</li>
              <li>Any product purchased through affiliate links on this site</li>
            </ul>

            <h2>9. Indemnification</h2>
            <p>You agree to indemnify, defend, and hold harmless Pet Grace, its owners, operators, contributors, successors, and assigns from any claims, damages, losses, liabilities, costs, and expenses (including attorney fees) arising from your use of this site or violation of these Terms.</p>

            <h2>10. Digital Asset Transfer</h2>
            <p>Pet Grace is a digital asset that may be bought and sold. Any buyer or operator of this digital asset inherits these Terms of Use and agrees to maintain them. The buyer agrees to keep these disclaimers, terms, and legal notices in place and to not use this platform to provide professional veterinary, medical, or mental health advice. The original builder of this asset bears no ongoing liability for the platform after transfer to a new owner.</p>

            <h2>11. Changes to Terms</h2>
            <p>Pet Grace reserves the right to modify these Terms at any time. Continued use of the site after changes constitutes acceptance of the updated Terms.</p>

            <h2>12. Governing Law</h2>
            <p>These Terms are governed by the laws of the United States. Any disputes shall be resolved in the jurisdiction where the site operator is located.</p>

            <p className="legal-updated">Last updated: June 2026</p>
          </div>
        </div>
      </div>
    </>
  );
}

export function Disclaimer() {
  return (
    <>
      <SEOHead title="Disclaimer — Pet Grace" canonical="/disclaimer" />
      <div className="legal-page">
        <div className="legal-hero">
          <div className="container">
            <h1>Site Disclaimer</h1>
            <p>Please read this carefully before using Pet Grace.</p>
          </div>
        </div>
        <div className="container legal-content">
          <div className="legal-body card">

            <div className="legal-warning-box">
              <h2>⚠️ Important Notice</h2>
              <p>Pet Grace provides general information and educational content only. We are not veterinarians, licensed animal behaviorists, mental health professionals, or medical advisors of any kind. Nothing on this website should be used as a substitute for professional veterinary care, mental health support, or licensed medical advice.</p>
            </div>

            <h2>Veterinary & Animal Health Disclaimer</h2>
            <p>All pet health, nutrition, symptom, and care information on Pet Grace is provided for general educational and informational purposes only. This information:</p>
            <ul>
              <li>Does NOT constitute veterinary advice</li>
              <li>Does NOT replace a consultation with a licensed veterinarian</li>
              <li>Should NOT be used to diagnose, treat, or make medical decisions about your pet</li>
              <li>May NOT apply to your specific pet's breed, age, health history, or condition</li>
            </ul>
            <p><strong>If your pet is ill, injured, or you have any concern about their health, contact your veterinarian immediately.</strong> In a pet emergency, contact an emergency veterinary clinic or call the ASPCA Animal Poison Control Center at 1-888-426-4435.</p>

            <h2>Quality of Life Assessment Tool Disclaimer</h2>
            <p>The Quality of Life Assessment tool on Pet Grace is based on the HHHHHMM scale developed by Dr. Alice Villalobos. This tool is provided strictly as:</p>
            <ul>
              <li>An educational resource to help pet owners organize their observations</li>
              <li>A starting point for conversations with your veterinarian — NOT a decision-making tool</li>
              <li>A general framework only — it cannot account for your pet's specific medical history or condition</li>
            </ul>
            <p><strong>No end-of-life decision should be made based solely or primarily on this tool.</strong> End-of-life decisions for your pet should always be made in consultation with a licensed veterinarian who knows your pet's full medical history. Pet Grace accepts no liability for decisions made based on this tool.</p>

            <h2>AI Pet Advisor Disclaimer</h2>
            <p>The Pet Grace AI Pet Advisor is powered by artificial intelligence technology. It is provided for general informational and educational purposes only. The AI Pet Advisor:</p>
            <ul>
              <li>Is NOT a licensed veterinarian and does NOT provide veterinary advice</li>
              <li>May produce inaccurate, incomplete, or outdated information</li>
              <li>Cannot examine your pet, review their medical history, or diagnose conditions</li>
              <li>Should NEVER be used as a substitute for professional veterinary care</li>
              <li>Is not appropriate for emergency situations — call your vet or emergency animal hospital immediately</li>
            </ul>
            <p>By using the AI Pet Advisor, you acknowledge that you are using an AI tool for general information only, and that Pet Grace bears no responsibility for any decisions made based on AI-generated content.</p>

            <h2>Grief Support Content Disclaimer</h2>
            <p>Pet Grace provides homesteading grief support resources for general informational and comfort purposes. Our grief content:</p>
            <ul>
              <li>Is NOT a substitute for professional mental health support or grief counseling</li>
              <li>Is NOT written by licensed mental health professionals unless specifically stated</li>
              <li>Should NOT be relied upon as the sole source of support during a mental health crisis</li>
            </ul>
            <p>If you are experiencing a mental health crisis, thoughts of self-harm, or feel you cannot cope with your grief, please contact a mental health professional or call/text 988 (Suicide and Crisis Lifeline) immediately. Pet Grace support lines listed on our site are for homesteading support — for mental health emergencies, please use dedicated mental health resources.</p>

            <h2>Product Recommendations Disclaimer</h2>
            <p>Product recommendations on Pet Grace are provided for informational purposes based on general research and affiliate partnerships. We recommend you:</p>
            <ul>
              <li>Consult your veterinarian before changing your pet's diet or adding supplements</li>
              <li>Read all product labels and follow manufacturer instructions</li>
              <li>Monitor your pet for any adverse reactions to new products</li>
              <li>Understand that individual results may vary based on your pet's specific needs</li>
            </ul>
            <p>Pet Grace is not responsible for any adverse reactions, injuries, or outcomes resulting from products purchased through links on this site.</p>

            <h2>General Limitation of Liability</h2>
            <p>To the fullest extent permitted by applicable law, Pet Grace, its owners, writers, and contributors shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from:</p>
            <ul>
              <li>Your use of or reliance on any information on this site</li>
              <li>Decisions made based on the Quality of Life tool, AI Pet Advisor, or any content on this site</li>
              <li>Products purchased through affiliate links on this site</li>
              <li>Any action or inaction taken in response to grief support content</li>
            </ul>

            <h2>Your Responsibility</h2>
            <p>By using Pet Grace, you acknowledge and agree that:</p>
            <ul>
              <li>You are responsible for your own decisions regarding your pet's care</li>
              <li>You will consult a licensed veterinarian for all health-related decisions</li>
              <li>You will seek professional mental health support if needed</li>
              <li>You understand that information on this site is general in nature and may not apply to your specific situation</li>
            </ul>

            <p className="legal-updated">Last updated: June 2026</p>
          </div>
        </div>
      </div>
    </>
  );
}

export function AffiliateDisclosure() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <>
      <SEOHead title="Affiliate Disclosure — Pet Grace" canonical="/affiliate-disclosure" />
      <div className="legal-page">
        <div className="legal-hero">
          <div className="container">
            <h1>Affiliate Disclosure</h1>
            <p>Last updated: January 1, 2025</p>
          </div>
        </div>
        <div className="legal-body container">
          <div className="legal-content">
            <p className="legal-intro">
              Pet Grace is committed to transparency. This page discloses our relationship 
              with affiliate partners in compliance with the Federal Trade Commission (FTC) guidelines.
            </p>

            <h2>What Are Affiliate Links?</h2>
            <p>
              Some links on this website are affiliate links. This means that when you click on the link 
              and make a purchase (or sign up for a service), we may receive a small commission — at no 
              additional cost to you. The price you pay is the same whether you use our affiliate link or not.
            </p>

            <h2>Our Commitment to You</h2>
            <p>
              We only recommend products, books, and services that we personally use, have researched 
              thoroughly, or genuinely believe will benefit you on your homesteading journey. Our editorial 
              opinions are never influenced by affiliate relationships. We would never recommend something 
              just for a commission.
            </p>

            <h2>Current Affiliate Relationships</h2>
            <p>We may have affiliate relationships with:</p>
            <ul>
              <li>Amazon Associates (books and products)</li>
              <li>YNAB (You Need A Budget)</li>
              <li>EveryDollar / Ramsey+ platform</li>
              <li>Fidelity Investments</li>
              <li>Other financial tools and educational resources</li>
            </ul>
            <p>This list is not exhaustive and may change over time.</p>

            <h2>How to Identify Affiliate Links</h2>
            <p>
              Affiliate links on our Resources page are marked with an external link icon and/or the 
              notation "affiliate link." We strive to clearly identify all affiliate relationships throughout 
              our content.
            </p>

            <h2>FTC Compliance</h2>
            <p>
              In accordance with FTC guidelines, we disclose our affiliate relationships clearly and 
              prominently. If you have questions about any specific recommendation or relationship, 
              please don't hesitate to contact us.
            </p>

            <h2>Contact</h2>
            <p>
              Questions about this disclosure? Email us at{' '}
              <a href="mailto:hello@faithwealthblueprint.com">hello@faithwealthblueprint.com</a>.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export function NotFound() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <>
      <SEOHead title="Page Not Found — Pet Grace" />
      <div className="not-found-page">
        <div className="not-found-content">
          <div className="not-found-number">404</div>
          <h1>This Page Wandered Off</h1>
          <p>
            "For I know the plans I have for you," declares the Lord — but unfortunately, 
            this page wasn't part of them. Let's get you back on the right path.
          </p>
          <div className="not-found-links">
            <a href="/" className="btn btn-primary">Back to Home</a>
            <a href="/blog" className="btn btn-outline-dark">Read the Blog</a>
            <a href="/tools" className="btn btn-outline-dark">Try Our Tools</a>
          </div>
          <p className="not-found-scripture">
            "Your word is a lamp to my feet and a light to my path." — Psalm 119:105
          </p>
        </div>
      </div>
    </>
  );
}
