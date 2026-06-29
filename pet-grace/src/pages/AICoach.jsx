import { useState, useRef, useEffect } from 'react';
import { Send, Heart, Sparkles, RefreshCw } from 'lucide-react';
import './AICoach.css';

const SYSTEM_PROMPT = `You are My Pet Grace's AI Pet Advisor — a warm, knowledgeable, and compassionate assistant for pet owners.

Your purpose is to help pet owners with:
1. Pet care questions (nutrition, behavior, training, grooming, exercise)
2. Understanding pet health symptoms (always recommend vet for anything concerning)
3. Senior pet care and end-of-life guidance
4. Pet loss grief support — compassionate, faith-aware responses
5. Product recommendations (food, supplements, gear)
6. New pet guidance (puppy/kitten basics, first vet visit, socialization)

YOUR TONE:
- Warm and compassionate — like a knowledgeable friend who loves animals
- Honest about limits — always recommend a vet for health concerns
- Faith-aware but not preachy — acknowledge spiritual dimensions of pet-human bonds when relevant
- Practical — give real, actionable answers

CRITICAL: You are NOT a veterinarian. For any health symptoms, emergencies, or medical decisions, ALWAYS recommend the pet owner contact their veterinarian immediately. Be clear about this.

For grief support: Be gentle, validating, and compassionate. Pet grief is real. Never minimize it. Offer practical next steps and resources.

Keep responses helpful but not overwhelming — clear paragraphs, practical guidance.`;

const starterPrompts = [
  { label: '🐾 Grief Support', prompt: 'I just lost my dog of 12 years and I am devastated. How do I cope with this grief?' },
  { label: '🍗 Best Food for Dogs', prompt: 'What should I look for when choosing the best food for my adult dog?' },
  { label: '🐱 Senior Cat Care', prompt: 'My cat is 14 years old and slowing down. What changes should I make to care for her?' },
  { label: '🐶 New Puppy Help', prompt: 'I just got my first puppy. What are the most important things to do in the first week?' },
  { label: '💊 Pet Insurance', prompt: 'Is pet insurance worth it? How do I choose the right plan?' },
  { label: '😟 Pet Behavior Issue', prompt: 'My dog is anxious when I leave the house. What can I do to help with separation anxiety?' },
];

export default function AICoach() {
  const [messages, setMessages] = useState([{
    role: 'assistant',
    content: 'Welcome to My Pet Grace AI Pet Advisor. 🐾\n\nI am here to help with pet care questions, senior pet guidance, grief support after pet loss, and more.\n\nWhat can I help you and your pet with today? Feel free to ask anything — I am here for you.',
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

  const reset = () => setMessages([{
    role: 'assistant',
    content: 'New session started. How can I help you and your pet today? 🐾',
  }]);

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
              <h1>AI Pet Advisor</h1>
              <p>Pet care guidance, grief support, and knowledgeable answers — any time.</p>
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
            <div className="ai-coach__disclaimer-box">
              <p><strong>⚠️ Important:</strong> The AI Pet Advisor provides general information only. It is <strong>NOT a veterinarian</strong> and cannot diagnose or treat your pet.</p>
            </div>
            <p style={{marginTop:'0.5rem'}}>For any health concerns or emergencies, contact your vet immediately.</p>
            <p style={{ marginTop: '0.5rem' }}>For any health concerns, emergencies, or medical decisions, please contact your veterinarian immediately.</p>
            <p style={{ marginTop: '0.75rem', fontSize: '0.78rem', color: 'var(--text-muted)', fontStyle: 'italic' }}>My Pet Grace AI Advisor is powered by Anthropic Claude.</p>
          </div>
        </div>

        <div className="ai-coach__chat card">
          <div className="ai-coach__chat-header">
            <div className="ai-coach__chat-title"><Heart size={18} /> <span>My Pet Grace Advisor</span></div>
            <button className="ai-coach__reset" onClick={reset} title="New session"><RefreshCw size={15} /> New Session</button>
          </div>
          <div className="ai-coach__messages">
            {messages.map((m, i) => (
              <div key={i} className={`ai-coach__msg ai-coach__msg--${m.role}`}>
                {m.role === 'assistant' && <div className="ai-coach__avatar">🐾</div>}
                <div className="ai-coach__bubble">
                  {m.role === 'assistant' ? formatContent(m.content) : m.content}
                </div>
              </div>
            ))}
            {loading && (
              <div className="ai-coach__msg ai-coach__msg--assistant">
                <div className="ai-coach__avatar">🐾</div>
                <div className="ai-coach__bubble ai-coach__bubble--loading">
                  <span></span><span></span><span></span>
                </div>
              </div>
            )}
            <div ref={endRef} />
          </div>
          <div className="ai-coach__input-row">
            <textarea
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send(); } }}
              placeholder="Ask about pet care, grief support, nutrition, behavior..."
              rows={3}
              disabled={loading}
            />
            <button className="ai-coach__send" onClick={() => send()} disabled={!input.trim() || loading} aria-label="Send">
              <Send size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
