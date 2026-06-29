import { useState, useRef, useEffect } from 'react';
import { Send, Leaf, Sparkles, RefreshCw, ShieldCheck } from 'lucide-react';
import './AICoach.css';

const starterPrompts = [
  { label: '🌱 What to Plant Now', prompt: 'I am in growing zone 6b. What should I plant this month?' },
  { label: '🫙 Canning Green Beans', prompt: 'How do I safely can green beans at home?' },
  { label: '🐓 Starting Backyard Chickens', prompt: 'How do I start a backyard flock for eggs?' },
  { label: '🍅 Too Many Tomatoes', prompt: 'What are the best ways to preserve extra tomatoes?' },
  { label: '🐛 Pest Problem', prompt: 'Something is eating holes in my cabbage leaves.' },
  { label: '🌿 Building Better Soil', prompt: 'How do I improve clay-heavy garden soil?' },
];

const knowledgeBase = [
  {
    terms: ['zone', 'plant', 'seed', 'start', 'calendar', 'month'],
    answer: `Start with your USDA zone, last frost date, and first frost date. For most beginner gardens, choose 3-5 reliable crops first: lettuce, green beans, tomatoes, basil, and zucchini.\n\nSteps:\n- Use the Planting Calendar on the Tools page.\n- Start cool-season crops before heat arrives.\n- Start warm-season crops after frost danger has passed.\n- Keep notes so next season is easier.\n\nFaith reminder: seedtime and harvest are rhythms God built into creation. Start small and steward it well.`
  },
  {
    terms: ['can', 'canning', 'green beans', 'pressure', 'water bath', 'jar'],
    answer: `Green beans are a low-acid food, so they must be pressure canned, not water-bath canned.\n\nSafety steps:\n- Use a current USDA-tested recipe.\n- Use a real pressure canner, not a pressure cooker.\n- Adjust for altitude.\n- Inspect jars and lids.\n- Process for the tested time and pressure.\n- When in doubt, use the National Center for Home Food Preservation or your local extension office.\n\nThis advisor is educational only. Food safety decisions should always be verified with tested sources.`
  },
  {
    terms: ['chicken', 'flock', 'hen', 'coop', 'egg', 'rooster'],
    answer: `For backyard chickens, start with local rules first. Many areas allow hens but restrict roosters.\n\nBeginner checklist:\n- Confirm local ordinances.\n- Start with 3-6 hens.\n- Provide predator-proof housing.\n- Plan about 4 sq ft per bird inside and 10 sq ft per bird in the run.\n- Provide layer feed, grit, oyster shell, clean water, shade, and ventilation.\n- Choose calm beginner breeds like Australorp, Orpington, Plymouth Rock, or Rhode Island Red.\n\nFor illness or injury, contact a veterinarian or poultry extension resource.`
  },
  {
    terms: ['tomato', 'tomatoes', 'preserve', 'sauce', 'salsa'],
    answer: `Extra tomatoes are a blessing, but preserve them safely.\n\nBest options:\n- Freeze whole tomatoes for later sauce.\n- Dehydrate slices for soups and powders.\n- Make sauce using a tested canning recipe.\n- Can crushed tomatoes only with proper acidification.\n- Make salsa only from tested recipes because ratios matter.\n\nNever guess with canning acidity. Use USDA-tested recipes and bottled lemon juice or citric acid when required.`
  },
  {
    terms: ['bug', 'pest', 'holes', 'cabbage', 'worm', 'leaves'],
    answer: `Holes in cabbage leaves are often from cabbage worms, loopers, slugs, or flea beetles.\n\nWhat to do:\n- Check undersides of leaves early morning.\n- Hand-pick visible worms.\n- Use row cover before pests arrive.\n- Encourage beneficial insects.\n- For caterpillars, many organic growers use Bt according to label directions.\n- Remove badly damaged leaves and keep beds clean.\n\nIf damage spreads quickly, contact your local extension office with photos.`
  },
  {
    terms: ['soil', 'clay', 'compost', 'raised bed', 'amend'],
    answer: `Clay soil can become productive with patience. Do not try to fix it all at once.\n\nTwo-season plan:\n- Add 2-3 inches of finished compost each season.\n- Avoid working clay when it is wet.\n- Use mulch to protect the surface.\n- Add organic matter, not sand.\n- Use cover crops where possible.\n- Consider raised beds while improving native soil slowly.\n\nGood soil is built, not bought. Steward it season by season.`
  },
];

const fallbackAnswer = `Here is a simple way to move forward:\n\n- Start with your growing zone and season.\n- Choose one practical next step instead of trying to do everything.\n- Use the Tools page for planting dates, growing zones, canning basics, and seasonal rhythms.\n- For food safety, always verify with USDA-tested canning guidance.\n- For animal health, local laws, or plant disease, contact a local extension office or qualified professional.\n\nWhole Home Harvest is here to help you tend the earth, feed your family, and honor God one faithful step at a time.`;

function getAdvisorReply(text) {
  const lower = text.toLowerCase();
  const hit = knowledgeBase.find(item => item.terms.some(term => lower.includes(term)));
  return hit ? hit.answer : fallbackAnswer;
}

export default function AICoach() {
  const [messages, setMessages] = useState([{
    role: 'assistant',
    content: 'Welcome to the Whole Home Harvest Advisor. 🌱\n\nThis demo advisor gives instant homesteading guidance without requiring an API key. A buyer can later connect Claude, OpenAI, or another AI provider through a secure backend endpoint.\n\nWhat can I help you grow today?',
  }]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const endRef = useRef(null);

  useEffect(() => { endRef.current?.scrollIntoView({ behavior: 'smooth' }); }, [messages, loading]);

  const send = async (text) => {
    const userText = (text || input).trim();
    if (!userText || loading) return;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userText }]);
    setLoading(true);
    setTimeout(() => {
      setMessages(prev => [...prev, { role: 'assistant', content: getAdvisorReply(userText) }]);
      setLoading(false);
    }, 350);
  };

  const reset = () => setMessages([{ role: 'assistant', content: 'New session started. What can I help you grow today? 🌱' }]);

  const formatContent = (text) =>
    text.split('\n').map((line, i) => {
      if (line.startsWith('# ')) return <h2 key={i} style={{ fontFamily: 'var(--font-display)', marginBottom: '0.5rem' }}>{line.slice(2)}</h2>;
      if (line.startsWith('## ')) return <h3 key={i} style={{ fontFamily: 'var(--font-display)', marginBottom: '0.4rem', marginTop: '0.75rem' }}>{line.slice(3)}</h3>;
      if (line.startsWith('- ') || line.startsWith('• ')) return <li key={i} style={{ marginBottom: '0.25rem', marginLeft: '1rem' }}>{line.slice(2)}</li>;
      if (line === '') return <br key={i} />;
      return <p key={i} style={{ marginBottom: '0.4rem', lineHeight: '1.7' }}>{line}</p>;
    });

  return (
    <div className="ai-coach">
      <div className="ai-coach__hero">
        <div className="container">
          <div className="ai-coach__hero-content">
            <div className="ai-coach__hero-icon"><Sparkles size={28} /></div>
            <div>
              <h1>AI Harvest Advisor</h1>
              <p>Faith-rooted homesteading guidance — garden planning, canning safety, chickens, soil, and preservation.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container ai-coach__layout">
        <div className="ai-coach__sidebar">
          <div className="card">
            <h3 className="ai-coach__sidebar-title">Quick Start</h3>
            <div className="ai-coach__prompts">
              {starterPrompts.map((p, i) => (
                <button key={i} className="ai-coach__prompt-btn" onClick={() => send(p.prompt)}>{p.label}</button>
              ))}
            </div>
          </div>
          <div className="card ai-coach__tips">
            <h3 className="ai-coach__sidebar-title"><ShieldCheck size={16} /> Buyer-Safe Demo Mode</h3>
            <p>This advisor works immediately without exposing API keys in the browser.</p>
            <p style={{ marginTop: '0.5rem' }}>A buyer can later connect a secure serverless AI endpoint using Cloudflare Workers, Netlify Functions, or their own backend.</p>
            <p style={{ marginTop: '0.75rem' }}><strong>Safety:</strong> For canning, verify with USDA-tested recipes. For animal health or local ordinances, use qualified local guidance.</p>
          </div>
        </div>
        <div className="ai-coach__chat card">
          <div className="ai-coach__chat-header">
            <div className="ai-coach__chat-title"><Leaf size={18} /> <span>Harvest Advisor</span></div>
            <button className="ai-coach__reset" onClick={reset}><RefreshCw size={15} /> New Session</button>
          </div>
          <div className="ai-coach__messages">
            {messages.map((m, i) => (
              <div key={i} className={`ai-coach__msg ai-coach__msg--${m.role}`}>
                {m.role === 'assistant' && <div className="ai-coach__avatar">🌾</div>}
                <div className="ai-coach__bubble">
                  {m.role === 'assistant' ? formatContent(m.content) : m.content}
                </div>
              </div>
            ))}
            {loading && (
              <div className="ai-coach__msg ai-coach__msg--assistant">
                <div className="ai-coach__avatar">🌾</div>
                <div className="ai-coach__bubble ai-coach__bubble--loading"><span></span><span></span><span></span></div>
              </div>
            )}
            <div ref={endRef} />
          </div>
          <div className="ai-coach__input-row">
            <textarea
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send(); } }}
              placeholder="Ask about planting, canning, chickens, soil, preservation..."
              rows={3}
              disabled={loading}
            />
            <button className="ai-coach__send" onClick={() => send()} disabled={!input.trim() || loading} aria-label="Send message">
              <Send size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
