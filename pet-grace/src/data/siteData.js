export const siteConfig = {
  name: 'My Pet Grace',
  tagline: 'Love Your Pet Well. Grieve Well. Heal Well.',
  description: 'Faith-inspired pet care guidance, pet loss grief support, and trusted product recommendations for pet owners who love their animals deeply.',
  url: 'https://mypetgrace.com',
  email: 'hello@mypetgrace.com',
  scripture: '"A righteous man cares for the needs of his animal." — Proverbs 12:10',
  affiliateDisclaimer: 'Pet Grace participates in affiliate programs including Chewy, Petco, and others. When you purchase through our links, we may earn a small commission at no extra cost to you. We only recommend products we genuinely believe help pets thrive.',
};

export const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Pet Care', path: '/resources' },
  { label: 'Grief Support', path: '/tools' },
  { label: 'Blog', path: '/blog' },
  { label: 'AI Pet Advisor', path: '/ai-coach' },
  { label: 'FAQ', path: '/faq' },
];

export const testimonials = [
  {
    id: 1,
    name: 'Sarah M.',
    role: 'Dog mom — Texas',
    quote: 'When we lost our golden retriever of 14 years, I did not know where to turn. The grief support resources here helped me understand that what I was feeling was completely normal and valid. I am so grateful.',
    avatar: 'SM',
  },
  {
    id: 2,
    name: 'James & Rita K.',
    role: 'Cat parents — Ohio',
    quote: 'The AI Pet Advisor helped us understand our senior cat\'s symptoms before her vet appointment. It gave us the right questions to ask. We caught her kidney disease early because of it.',
    avatar: 'JK',
  },
  {
    id: 3,
    name: 'Danielle W.',
    role: 'Rescue foster mom — Georgia',
    quote: 'As someone who fosters rescue dogs, I use Pet Grace constantly for behavioral tips and product recommendations. The affiliate links always go to products I actually trust.',
    avatar: 'DW',
  },
  {
    id: 4,
    name: 'Marcus T.',
    role: 'First-time pet owner — California',
    quote: 'I got my first dog as an adult and had no idea what I was doing. Pet Grace\'s new pet checklist and feeding guides made the first year so much less stressful.',
    avatar: 'MT',
  },
];

export const faqs = [
  {
    id: 1,
    question: 'Is pet grief real? Am I overreacting to losing my pet?',
    answer: 'Pet grief is completely real and recognized by mental health professionals. The bond between a pet and their owner is one of the purest forms of love — unconditional, consistent, and deeply felt. Losing a pet can be as painful as losing any beloved family member. There is no overreacting. Your grief is valid, your loss is real, and your pet deserved to be mourned.',
  },
  {
    id: 2,
    question: 'How long does pet grief last?',
    answer: 'There is no set timeline for pet grief. Some people feel significant relief within weeks; others grieve for months or longer. Factors that affect the timeline include the length of your relationship with your pet, whether the loss was sudden or anticipated, your personal grieving style, and the level of support around you. Be patient with yourself. Grief is not a problem to be solved — it is love with nowhere to go.',
  },
  {
    id: 3,
    question: 'What does the AI Pet Advisor do?',
    answer: 'The AI Pet Advisor is a knowledgeable companion for everyday pet questions — nutrition, behavior, care routines, symptom information, and product guidance. It is NOT a replacement for your veterinarian. For any health concerns, always consult your vet. Think of the AI Advisor as a knowledgeable friend who helps you prepare for those vet conversations and make informed day-to-day decisions.',
  },
  {
    id: 4,
    question: 'What pets does Pet Grace cover?',
    answer: 'Our primary focus is dogs and cats since they represent the majority of companion animals. However, our grief support resources apply to any pet loss — rabbits, birds, fish, reptiles, horses, and any animal who held a place in your heart. We also have general small animal care resources.',
  },
  {
    id: 5,
    question: 'Does the Bible say anything about pets and animals?',
    answer: 'Yes. Proverbs 12:10 says "A righteous man cares for the needs of his animal." God created animals and declared them good (Genesis 1). Jesus used animals in parables showing their value. While the Bible does not directly address pet heaven, many theologians believe the new creation described in Isaiah 11 and Revelation 21 includes animals. Your love for your pet reflects the love God built into creation.',
  },
  {
    id: 6,
    question: 'How do I help my child grieve a pet?',
    answer: 'Children grieve differently than adults and their grief deserves to be taken seriously. Do not minimize the loss ("it was just a fish"). Acknowledge the pain honestly. Let them participate in memorial rituals if appropriate. Read books together about pet loss. Allow them to express grief through drawing or writing. And use it as an age-appropriate opportunity to talk about death, love, and the goodness of God who made all living things.',
  },
  {
    id: 7,
    question: 'When is it time to get another pet after loss?',
    answer: 'Only you can answer this — and there is no right or wrong timeline. Some people find comfort in a new pet relatively quickly; others need months or years. A new pet should never be seen as a "replacement" for the one you lost. When you feel ready to open your heart again — not to replace but to love anew — that is your answer. Listen to your heart and give yourself grace.',
  },
  {
    id: 8,
    question: 'Are your product recommendations paid?',
    answer: 'Some links on Pet Grace are affiliate links, meaning we earn a small commission when you purchase through them — at no extra cost to you. We only recommend products we genuinely believe serve pets and their owners well. Our affiliate disclosure is always clearly posted. Our editorial recommendations are never influenced by commission rates.',
  },
];

export const petCareCategories = [
  {
    category: 'Nutrition & Food',
    icon: '🍗',
    items: [
      { name: 'Chewy', desc: 'Largest online pet store — food, treats, medications, auto-ship', url: 'https://www.chewy.com', type: 'Store', commission: '4-7%' },
      { name: 'Ollie', desc: 'Fresh, human-grade dog food — vet formulated, home delivered', url: 'https://www.myollie.com', type: 'Premium Food', commission: 'Up to 28%' },
      { name: 'JustFoodForDogs', desc: 'Human-grade fresh meals and whole food supplements for dogs', url: 'https://www.justfoodfordogs.com', type: 'Premium Food', commission: 'Up to 28%' },
      { name: 'The Farmer\'s Dog', desc: 'Personalized fresh dog food subscription', url: 'https://www.thefarmersdog.com', type: 'Fresh Food', commission: '$50+/sale' },
    ],
  },
  {
    category: 'Health & Wellness',
    icon: '💊',
    items: [
      { name: '1800PetMeds', desc: 'Pet medications, flea treatments, supplements — trusted name', url: 'https://www.1800petmeds.com', type: 'Pharmacy', commission: 'Up to 17.7%' },
      { name: 'Petco', desc: 'Full-service pet retail with grooming, vet care, training', url: 'https://www.petco.com', type: 'Retail', commission: 'Up to 7%' },
      { name: 'HolistaPet', desc: 'Natural CBD products for dogs and cats — calming, joint, wellness', url: 'https://www.holistapet.com', type: 'Natural Wellness', commission: '15-35%' },
      { name: 'BestLife4Pets', desc: 'Homeopathic remedies for dogs and cats — joint, anxiety, digestion', url: 'https://www.bestlife4pets.com', type: 'Natural Wellness', commission: 'High commission' },
    ],
  },
  {
    category: 'Gear & Accessories',
    icon: '🎾',
    items: [
      { name: 'Ruffwear', desc: 'Premium outdoor gear for active dogs — harnesses, boots, packs', url: 'https://www.ruffwear.com', type: 'Gear', commission: '8%' },
      { name: 'Whistle', desc: 'GPS tracker and health monitor for dogs', url: 'https://www.whistle.com', type: 'Tech', commission: 'Varies' },
      { name: 'FitBark', desc: 'Smallest dog GPS tracker with health monitoring — 12% commission', url: 'https://www.fitbark.com', type: 'Tech', commission: '12%' },
      { name: 'BarkBox', desc: 'Monthly subscription box of toys and treats for dogs', url: 'https://www.barkbox.com', type: 'Subscription', commission: '$15-25/sale' },
    ],
  },
  {
    category: 'Pet Loss & Memorial',
    icon: '🕊️',
    items: [
      { name: 'Paw & Glory', desc: 'Custom pet portraits — painted from photos, meaningful gifts', url: 'https://www.pawandglory.com', type: 'Memorial', commission: '10%' },
      { name: 'Pet Perennials', desc: 'Living memorial kits — plant a tree or flowers in your pet\'s memory', url: 'https://www.petperennials.com', type: 'Memorial', commission: '15%' },
      { name: 'Always In My Heart', desc: 'Personalized pet memorial jewelry and keepsakes', url: 'https://www.alwaysinmyheart.com', type: 'Memorial', commission: 'Varies' },
      { name: 'Rainbow Bridge Resources', desc: 'Books, journals, and support materials for pet loss grief', url: 'https://www.amazon.com', type: 'Books', commission: 'Amazon Associates' },
    ],
  },
  {
    category: 'Training & Behavior',
    icon: '🎓',
    items: [
      { name: 'Brain Training for Dogs', desc: 'Online dog training program — force-free methods', url: 'https://www.braintrainingfordogs.com', type: 'Training', commission: 'Up to 75% (ClickBank)' },
      { name: 'Petco Training', desc: 'In-person and virtual training classes', url: 'https://www.petco.com', type: 'Training', commission: 'Up to 7%' },
      { name: 'Doggy Dan', desc: 'Online dog trainer — obedience and behavior', url: 'https://www.doggydanonline.com', type: 'Training', commission: 'High' },
    ],
  },
  {
    category: 'Pet Insurance',
    icon: '🛡️',
    items: [
      { name: 'Embrace Pet Insurance', desc: 'Comprehensive coverage — pays per incident with diminishing deductible', url: 'https://www.embracepetinsurance.com', type: 'Insurance', commission: 'Per lead' },
      { name: 'Lemonade Pet Insurance', desc: 'Fast, affordable, tech-forward pet insurance', url: 'https://www.lemonade.com/pet', type: 'Insurance', commission: 'Per lead' },
      { name: 'Spot Pet Insurance', desc: 'Customizable plans for dogs and cats', url: 'https://www.spotpetins.com', type: 'Insurance', commission: 'Per lead' },
    ],
  },
];

export const griefStages = [
  {
    stage: 'Shock & Denial',
    icon: '😶',
    description: 'This cannot be real. You may feel numb, disconnected, or like you are going through motions. You might expect to hear their collar jingle or find yourself reaching for their leash.',
    support: 'Allow yourself to feel nothing. Numbness is a mercy. Do not force yourself to feel what you are "supposed" to feel.',
  },
  {
    stage: 'Pain & Guilt',
    icon: '💔',
    description: 'The what-ifs arrive. Did I do enough? Should I have noticed sooner? Could I have done more? The guilt can feel crushing even when you did everything right.',
    support: 'You loved your pet. That love was enough. Guilt is grief looking for a place to land — it does not mean you failed.',
  },
  {
    stage: 'Anger',
    icon: '😠',
    description: 'Anger at the vet, at God, at yourself, at the situation. You may feel people minimize your loss or do not understand. This anger is real and valid.',
    support: 'Find a safe place for your anger. Journal it, walk it out, cry it out. Anger is energy that needs somewhere to go.',
  },
  {
    stage: 'Bargaining',
    icon: '🙏',
    description: 'If only I had... What if I had tried... You replay decisions looking for a different ending. This is your mind trying to regain control of something uncontrollable.',
    support: 'Gently remind yourself: you made decisions with the information and love you had. That is all any of us can do.',
  },
  {
    stage: 'Depression & Loneliness',
    icon: '😔',
    description: 'The house feels too quiet. Their bowl is still there. You do not want to move their bed. A deep sadness settles in and the future feels gray.',
    support: 'This is love. You are not broken. Reach out to someone who understands — a pet loss support group, a friend, a counselor.',
  },
  {
    stage: 'Acceptance & Peace',
    icon: '🌿',
    description: 'Not forgetting — never forgetting. But a gentle shift toward acceptance. Their memory begins to bring comfort alongside the grief. You start to smile when you think of them.',
    support: 'Grief does not end — it changes. Honoring your pet by living and loving fully is one of the most beautiful things you can do in their memory.',
  },
];
