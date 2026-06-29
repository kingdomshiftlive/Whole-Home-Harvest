import { useState, useRef, useEffect } from 'react';
import { Send, Leaf, Sparkles, RefreshCw } from 'lucide-react';
import './AICoach.css';

const SYSTEM_PROMPT = `You are Whole Home Harvest's AI Harvest Advisor — a warm, knowledgeable, and faith-rooted companion for Kingdom homesteaders.

Your purpose is to help homesteaders with:
1. Garden planning — what to plant, when to plant, spacing, companion planting, crop rotation
2. Planting schedules — based on growing zones, frost dates, and seed starting timelines
3. Canning and food preservation — water bath canning, pressure canning, freezing, dehydrating, fermenting
4. Pest and disease identification — organic solutions preferred, integrated pest management
5. Backyard chickens and small livestock — basic husbandry, health, coop setup, breeds
6. Soil health — compost, soil amendments, cover crops, raised beds
7. Seasonal eating and preservation strategies
8. Faith integration — connecting homesteading work to biblical stewardship principles

YOUR TONE:
- Warm and encouraging — like a knowledgeable neighbor who has been homesteading for years
- Faith-aware — acknowledge the biblical dimension of homesteading when appropriate (Genesis 2:15, stewardship, first fruits)
- Practical — give real, actionable advice with specific details
- Honest about limits — recommend local cooperative extension services for highly regional questions

KINGDOM PERSPECTIVE:
When relevant, connect homesteading to biblical principles:
- Genesis 2:15 — Work and keep the garden is humanity's first calling
- Proverbs 31 — The virtuous woman provided food for her household
- Galatians 6:9 — Do not grow weary in doing good, the harvest is coming
- The principle of first fruits — honoring God with the first of the harvest

CRITICAL: Always recommend USDA-tested recipes for canning. Never suggest untested canning recipes or methods that could compromise food safety. For serious plant disease or animal health issues, recommend consulting a local cooperative extension agent or veterinarian.`;

const starterPrompts = [
  { label: '🌱 What to Plant Now', prompt: 'I am in growing zone 6b. What should I be planting right now and what can I start from seed indoors?' },
  { label: '🫙 Canning Green Beans', prompt: 'How do I safely can green beans at home? What equipment do I need and what are the exact steps?' },
  { label: '🐓 Starting Backyard Chickens', prompt: 'I want to start a small backyard flock of 4-6 chickens for eggs. Where do I begin?' },
  { label: '🍅 Too Many Tomatoes', prompt: 'My tomato plants are producing more than I can eat. What are the best ways to preserve them?' },
  { label: '🐛 Pest Problem', prompt: 'Something is eating holes in my cabbage leaves. How do I identify what it is and deal with it organically?' },
  { label: '🌿 Building Better Soil', prompt: 'My garden soil is clay-heavy and compacted. How do I improve it over one or two seasons?' },
];

export default function AICoach() {
  const [messages, setMessages] = useState([{
    role: 'assistant',
    content: 'Welcome to the Whole Home Harvest AI Advisor. 🌱\n\nI am here to help with garden planning, planting schedules, canning and preservation, backyard chickens, soil health, and the biblical principles of homestead stewardship.\n\nWhat can I help you grow today?',
  }]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const endRef = useRef(null);

  useEffect(() => { endRef.current?.scrollIntoView({ behavior: 'smooth' }); }, [messages, loading]);

  const send = async (text) => {
    const userText = (text || input).trim();
    if (!userText || loading) return;
    setInput('');
    const newMessages = [...messages, { role: 'user', content: userText }];
    setMessages(newMessages);
    setLoading(true);
    try {
      const res = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: 'claude-sonnet-4-6',
          max_tokens: 1000,
          system: SYSTEM_PROMPT,
          messages: newMessages.map(m => ({ role: m.role, content: m.content })),
        }),
      });
      const data = await res.json();
      const reply = data.content?.[0]?.text || 'I am having trouble responding right now. Please try again.';
      setMessages(prev => [...prev, { role: 'assistant', content: reply }]);
    } catch {
      setMessages(prev => [...prev, { role: 'assistant', content: 'Sorry — I encountered an error. Please try again.' }]);
    } finally {
      setLoading(false);
    }
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
              <p>Faith-rooted homesteading guidance — garden planning, canning safety, chickens, soil, and more.</p>
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
            <h3 className="ai-coach__sidebar-title">Important Note</h3>
            <p>The AI Harvest Advisor provides general guidance. For canning safety, always use <strong>USDA-tested recipes</strong> from the National Center for Home Food Preservation.</p>
            <p style={{ marginTop: '0.5rem' }}>For regional questions, your local <strong>cooperative extension office</strong> is the most reliable resource.</p>
            <p style={{ marginTop: '0.75rem', fontSize: '0.78rem', color: 'var(--text-muted)', fontStyle: 'italic' }}>Powered by Anthropic Claude.</p>
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
            <button className="ai-coach__send" onClick={() => send()} disabled={!input.trim() || loading}>
              <Send size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
