import type { Chapter } from '../types'

export const BOOK_TITLE = 'The Examined Life'
export const BOOK_SUBTITLE = 'A Journey Through Modern Philosophy, Purpose & the Human Condition'
export const BOOK_AUTHOR = 'A. R. Winslow'
export const BOOK_TAGLINE = 'What does it mean to live well in a world that never stops asking you to go faster?'

export const chapters: Chapter[] = [
  {
    id: 'ch-01',
    number: 1,
    title: 'The Quiet Revolution',
    subtitle: 'How Slowing Down Became Radical',
    summary: 'We begin where most of us are: overwhelmed, over-scheduled, and vaguely dissatisfied. This chapter traces the cultural forces that turned busyness into a virtue and silence into something to be afraid of — and why a growing number of people are quietly refusing.',
    wordCount: 8200,
    keywords: ['slowness', 'attention', 'culture', 'busyness', 'revolution', 'presence'],
    sections: [
      {
        id: 'ch-01-s1',
        title: 'The Speed Trap',
        keywords: ['speed', 'acceleration', 'technology', 'distraction'],
        content: `There is a peculiar modern affliction that has no clean diagnostic code, no medication, and no specialist you can be referred to. It is the feeling, persistent and low-grade, that you are always slightly behind. Behind on emails. Behind on news. Behind on your peers who seem to have figured out something you have not yet managed to figure out.

This feeling is not accidental. It was designed.

For most of human history, the pace of life was governed by the sun and the season. Information traveled at the speed of a horse. Decisions had room to breathe because they had to — there was simply no infrastructure for urgency at scale. The medieval monk who copied manuscripts by candlelight was not being lazy. He was working at the speed reality permitted.

The Industrial Revolution changed the speed of production. The Information Revolution changed the speed of everything else. And somewhere in the delta between those two accelerations, something was lost — not just time, but our relationship to time.

We now carry devices in our pockets that connect us to the sum of human knowledge, to every person we have ever met, to markets, disasters, and cat videos — simultaneously, instantaneously, without pause. The average American checks their phone 96 times per day. The average British adult spends more than four hours on screens before 9 AM. These numbers would have been incomprehensible to our grandparents. They are barely comprehensible to us.

What is remarkable is not that we are distracted. It is that we are surprised to be distracted.`,
      },
      {
        id: 'ch-01-s2',
        title: 'The Virtue of Busyness',
        keywords: ['busyness', 'status', 'identity', 'productivity'],
        content: `In 1899, the sociologist Thorstein Veblen observed that the wealthy demonstrated their status through leisure. The idle rich were idle on purpose — work was for the lower classes. A century later, the signal has inverted entirely. Busyness has become the new status symbol.

"I'm so busy" is no longer a complaint. It is a boast. When someone asks how you are doing and you reply "busy," what you are really saying is: I am important. I am in demand. I matter.

Harvard Business School researchers documented this phenomenon in a series of studies published in 2017. They found that Americans now associate busyness with high status in a way that their European counterparts do not. In Italy, France, and Germany, leisure time still carries connotations of success — having the means and freedom not to work. In the United States, the signal has flipped almost entirely.

This is not merely a cultural quirk. It shapes behavior in ways that are measurable and harmful. When busyness signals status, we have an incentive to perform busyness whether or not we are actually productive. We answer emails at midnight not because midnight is the best time to answer emails, but because being seen answering emails at midnight signals dedication. We pack our calendars not because every meeting is necessary, but because a full calendar signals importance.

The philosopher Josef Pieper called this "total work" — a society in which all of life is organized around the logic of production and utility. Leisure, in Pieper's framework, is not idleness but a different mode of being: receptive rather than productive, open rather than grasping. The loss of genuine leisure, he argued, is not merely an economic or personal problem. It is a spiritual one.`,
      },
      {
        id: 'ch-01-s3',
        title: 'The Refusers',
        keywords: ['resistance', 'slowness', 'deliberate', 'intentional living'],
        content: `And yet, something is changing. Quietly, incrementally, in ways that rarely make headlines because they are definitionally not dramatic, people are opting out.

The "slow movement" — slow food, slow travel, slow fashion — has been building for three decades, beginning with Carlo Petrini's 1989 protest against a McDonald's opening near the Spanish Steps in Rome. What began as a defense of Italian culinary culture has expanded into something broader: a philosophical stance against the colonization of every domain of life by the logic of efficiency.

But the refusers I am most interested in are not ideologues. They are ordinary people who have simply decided, often after some form of crisis or reckoning, that the pace they were living at was not sustainable and was not, in any meaningful sense, living at all.

I have spoken with hundreds of them over the past several years. A former management consultant who left a six-figure salary to apprentice with a furniture maker. A marketing executive who deleted all social media and reports feeling, three years later, like a different person — "not better, exactly, but more real." A couple who sold their house in London and moved to rural Wales, not to escape modernity, but to give their children, in their words, "the experience of boredom."

What strikes me about these accounts is not the drama of the transformation. It is the ordinariness of what they report on the other side. More time to read. More time to cook. The ability to finish a thought. The return of something they variously describe as wonder, presence, or simply themselves.

These are not extraordinary people who have done extraordinary things. They are people who have made a different calculation — and found, to their own surprise, that the math comes out differently than the culture told them it would.`,
      },
    ],
  },
  {
    id: 'ch-02',
    number: 2,
    title: 'The Architecture of Attention',
    subtitle: 'Why Focus Is the Scarcest Resource of the 21st Century',
    summary: 'Attention is not simply a cognitive capacity — it is the medium through which we experience our lives. This chapter examines how the attention economy was built, who profits from your distraction, and what reclaiming your focus actually requires.',
    wordCount: 9100,
    keywords: ['attention', 'focus', 'distraction', 'economy', 'cognitive', 'deep work'],
    sections: [
      {
        id: 'ch-02-s1',
        title: 'The Attention Economy',
        keywords: ['attention economy', 'social media', 'engagement', 'manipulation'],
        content: `In 1971, the economist Herbert Simon wrote a prescient sentence: "A wealth of information creates a poverty of attention." He could not have known how precisely this formula would describe the world fifty years hence.

The attention economy is a term coined in the 1990s to describe a market structure in which human attention — finite, nonrenewable, deeply personal — is the commodity being traded. Every company that offers you a "free" digital service is in the attention business. The service is free because you are not the customer. You are the product.

This is not a conspiracy theory. It is a business model, documented in detail by its own architects. Sean Parker, the founding president of Facebook, described the company's design philosophy in 2017 with unusual candor: "How do we consume as much of your time and conscious attention as possible?" The answer was a system of social validation — likes, shares, comments — calibrated to trigger dopamine responses in the same way that slot machines do.

The people who designed these systems are not malicious. Many of them believed they were building tools to connect humanity, and in some real sense they were. But the incentive structures they were working within — grow users, grow engagement, grow revenue — led inexorably to design choices that exploit human psychology rather than serve it.

Tristan Harris, a former design ethicist at Google, calls this "the race to the bottom of the brain stem." In a competitive attention market, the product that wins is the one that most effectively triggers the most primitive and powerful emotional responses: outrage, desire, fear, tribalism. Nuance does not engage. Complexity does not retain. Moderation does not go viral.`,
      },
      {
        id: 'ch-02-s2',
        title: 'What Deep Focus Feels Like',
        keywords: ['flow', 'deep work', 'concentration', 'craft', 'immersion'],
        content: `The psychologist Mihaly Csikszentmihalyi spent decades studying what he called "flow" — a state of deep engagement in which the self disappears, time distorts, and the quality of experience is qualitatively different from ordinary consciousness. Athletes call it being "in the zone." Musicians call it being "in the pocket." Writers call it the feeling of the work writing itself.

Flow, Csikszentmihalyi found, is not simply enjoyable. It is the foundation of what he calls a good life. Not happiness in the hedonistic sense — pleasure, comfort, the absence of pain — but eudaimonia in the Aristotelian sense: a life fully and authentically lived.

The conditions for flow are specific. The task must be challenging enough to demand your full attention, but not so difficult that it produces anxiety. There must be clear goals and immediate feedback. And crucially, there must be an absence of interruption.

This last condition is the one that modern life systematically destroys.

The cognitive scientist Gloria Mark has spent years studying what happens when knowledge workers are interrupted. Her findings are disturbing: it takes an average of 23 minutes and 15 seconds to return to a task after being interrupted. The average knowledge worker is interrupted or self-interrupts every 3 to 5 minutes. The math is not difficult: most of us are never, at any point during the workday, in a state of genuine focus.

Cal Newport, the computer scientist and author who has written extensively about what he calls "deep work," argues that this is not merely a productivity problem. It is a meaning problem. The activities that generate the most satisfaction and the deepest sense of accomplishment — creative work, complex problem-solving, genuine connection — all require sustained attention. Without the capacity for deep focus, we are left with what Newport calls "the shallows": constant busyness with little sense of direction or achievement.`,
      },
      {
        id: 'ch-02-s3',
        title: 'Reclaiming the Mind',
        keywords: ['mindfulness', 'digital detox', 'boundaries', 'reclaim', 'practice'],
        content: `What does it take to reclaim attention in an environment specifically designed to capture it?

The first thing to understand is that willpower is not the answer. Willpower is a finite resource, and the systems arrayed against it are infinite, adaptive, and staffed by PhDs in persuasion. Any strategy for protecting attention that relies on simply trying harder is doomed. The architecture must change.

This means, at minimum, changing the physical environment. The most consistent finding in the research on self-control is that people who appear to have more of it are actually better at arranging their environments so that temptation does not arise in the first place. The writer who puts their phone in a different room is not stronger than the one who keeps it on their desk. They are smarter.

It also means developing what the philosopher William James called "voluntary attention" — the capacity to bring the mind back, again and again, to what you have chosen to attend to. This is the fundamental practice underlying meditation, prayer, and most forms of serious intellectual work. It is a skill, and like all skills it can be developed. And like all skills, it atrophies without practice.

But reclaiming attention is not only about what you stop doing. It is about what you start doing with the space you create.

Many people who attempt digital detoxes report an uncomfortable discovery: they do not know what to do with unstructured time. The phone has become not just a distraction but a prosthesis for the capacity to simply be — to sit with one's thoughts, to tolerate uncertainty, to exist without input. Restoring genuine attention requires not just removing stimulation but rebuilding a relationship with internal experience.

This is harder than deleting apps. But it is the actual work.`,
      },
    ],
  },
  {
    id: 'ch-03',
    number: 3,
    title: 'On Solitude and Presence',
    subtitle: 'The Lost Art of Being Alone With Yourself',
    summary: 'Solitude has been misunderstood as loneliness or withdrawal. This chapter argues that it is, in fact, the precondition for everything we value most: creativity, wisdom, genuine connection, and self-knowledge.',
    wordCount: 7800,
    keywords: ['solitude', 'presence', 'silence', 'loneliness', 'self-knowledge', 'meditation'],
    sections: [
      {
        id: 'ch-03-s1',
        title: 'Solitude Is Not Loneliness',
        keywords: ['solitude', 'loneliness', 'distinction', 'desire for presence'],
        content: `There is a distinction that our culture consistently fails to make, and failing to make it costs us dearly. The distinction is between solitude and loneliness.

Loneliness is the pain of unwanted aloneness — the feeling of exclusion, of not belonging, of being unseen. It is a social pain, as real and debilitating as physical pain, and chronic loneliness is now recognized as a public health crisis in many developed countries. The former U.S. Surgeon General Vivek Murthy declared loneliness an epidemic in 2023, noting that its health effects — including elevated risk of heart disease, dementia, depression, and early death — are comparable to smoking fifteen cigarettes a day.

Solitude is something entirely different. It is the voluntary choice to be alone, for the purpose of engagement with one's own inner life. Solitude is the precondition for reflection, for creativity, for prayer, for reading, for any form of genuine self-knowledge. The philosopher Paul Tillich called it "the glory of being alone" — not the accident of isolation but the chosen encounter with oneself.

These two experiences — loneliness and solitude — can look identical from the outside but feel utterly different from the inside. And a society that is genuinely better at connecting people electronically has managed to produce more of the former while systematically destroying the conditions for the latter.`,
      },
      {
        id: 'ch-03-s2',
        title: 'What Silence Teaches',
        keywords: ['silence', 'inner voice', 'reflection', 'wisdom', 'monastery'],
        content: `In 2010, a neuroscientist named Marcus Raichle published research that would quietly revolutionize our understanding of the resting brain. Raichle and his colleagues discovered that the brain is not idle when not engaged in any particular task. Instead, it activates what they called the "default mode network" — a set of interconnected regions that activate specifically during unstructured time, during mind-wandering, during daydreaming.

What does the default mode network do? It processes social information, consolidates memories, imagines future scenarios, and engages in what we might loosely call meaning-making — the construction of narratives about our lives, our relationships, and our place in the world.

In other words: when we give the brain silence and space, it does some of its most important work.

This finding has profound implications for how we think about rest, creativity, and the relentless filling of every quiet moment with input. When we check our phones the moment we are alone, when we fill commutes with podcasts, when we cannot tolerate a queue without looking at something — we are not resting our brains. We are preventing them from doing the very processing that allows for insight, creativity, and emotional integration.

The desert fathers of early Christianity — ascetics who withdrew to the Egyptian desert in the third and fourth centuries — had no neuroscience. But they had direct experiential knowledge of something remarkably similar. The practice they called hesychia — stillness, inner quiet — was not the absence of thought but a different relationship to thought: observing rather than being driven by it. What they described as spiritual illumination, modern neuroscience describes as the productive activity of the default mode network. The language is different. The observation is the same.`,
      },
      {
        id: 'ch-03-s3',
        title: 'Learning to Be Present',
        keywords: ['presence', 'mindfulness', 'here and now', 'attention', 'practice'],
        content: `"The present moment always will have been." This is not a grammatical error. It is, I think, one of the most profound observations available to us in ordinary language.

Whatever is happening right now — this moment, this breath, this sensation — is permanent in a way that nothing about the future can be. The future is contingent. The past is fixed. And the present, experienced fully, becomes part of the immovable past the moment it passes. To live in the present is therefore not escapism from permanence but the deepest possible engagement with it.

This sounds beautiful and abstract. Practicing it is concrete, difficult, and constantly humbling.

The mindfulness movement has done something valuable in mainstreaming the basic practice of present-moment attention. It has also done something unfortunate in turning it into a wellness product — an anxiety management technique or a performance enhancer for knowledge workers. The deeper tradition from which these practices come is not interested in reducing anxiety or improving productivity. It is interested in waking up — in perceiving reality more clearly, with less filtering and projection, less compulsive narration.

Jon Kabat-Zinn, who pioneered the clinical applications of mindfulness in the West, defines it as "paying attention on purpose, in the present moment, non-judgmentally." All three of those qualifications matter. Not accidental attention. Not attention to the past or future. Not attention colored by evaluation.

This is simple. It is not easy. Attempting it for even five minutes reveals how rarely we are actually present to anything — how much of experience is processed at a remove, through the layer of commentary, judgment, and projection that the psychologists call "secondary elaboration."

But the gap between where we are and where we could be is not a cause for despair. It is the beginning of the actual work.`,
      },
    ],
  },
  {
    id: 'ch-04',
    number: 4,
    title: 'The Meaning Problem',
    subtitle: 'What We Talk About When We Talk About Purpose',
    summary: "Purpose has become a commodity — marketed, monetized, and largely drained of meaning. This chapter cuts through the noise to ask what meaningful work actually requires, why so many people feel a sense of hollowness despite outward success, and what the philosophers got right that the self-help industry missed.",
    wordCount: 8900,
    keywords: ['meaning', 'purpose', 'work', 'fulfillment', 'philosophy', 'vocation'],
    sections: [
      {
        id: 'ch-04-s1',
        title: 'The Purpose Industrial Complex',
        keywords: ['self-help', 'purpose', 'industry', 'commodification', 'authenticity'],
        content: `Walk into any bookstore — the few that remain — and you will find an entire section dedicated to helping you "find your purpose," "unlock your potential," or "live your best life." These books have titles like "Start With Why," "The Power of Now," and "You Are a Badass." They sell millions of copies because they are addressing something real: a widespread, genuine hunger for lives that feel meaningful.

What they mostly fail to deliver is not information. It is transformation. The gap between knowing what would be meaningful and actually restructuring one's life around it is not bridged by more content. It is bridged by something much harder: reckoning honestly with the costs of change, developing the habits and practices that embody new values, and tolerating the uncertainty and loss that genuine change always involves.

The philosopher Charles Taylor coined the phrase "the malaise of modernity" to describe a cluster of conditions that afflict contemporary societies: a sense of meaninglessness, a loss of the moral horizons that once gave life its shape, a flattening of experience that he calls "the eclipse of transcendence." Taylor's diagnosis is subtle enough that it resists the usual solutions. The problem is not that we lack information about how to live well. It is that the cultural frameworks within which meaning was generated — religion, tradition, community, shared narrative — have been eroded faster than anything has emerged to replace them.

This creates a paradox: we are freer than any humans in history to construct lives of our own choosing, and less certain than ever about what we should choose.`,
      },
      {
        id: 'ch-04-s2',
        title: 'What Aristotle Understood',
        keywords: ['aristotle', 'eudaimonia', 'virtue', 'flourishing', 'telos'],
        content: `The ancient Greek concept of eudaimonia is usually translated as "happiness," but this translation is actively misleading. Happiness, in contemporary usage, refers to a positive emotional state — feeling good. Eudaimonia is something more robust: flourishing, thriving, living well. It is the condition of a person who is actualizing their potential, exercising their distinctive human capacities, and living in accordance with virtue.

For Aristotle, eudaimonia was not a feeling to be pursued but a characteristic of certain ways of living. You did not "feel" eudaimonic the way you feel pleasure. You were eudaimonic to the extent that your life was organized around genuine goods — goods of character, goods of relationship, goods of the intellect — and exercised in appropriate action.

This has several implications that cut against contemporary assumptions.

First, eudaimonia is not separable from virtue. A life of excellence requires the cultivation of character — honesty, courage, temperance, justice, practical wisdom. These are not born but developed through practice. As Aristotle famously noted, we become just by doing just acts, courageous by doing courageous acts, temperate by doing temperate acts.

Second, eudaimonia is inherently social. Aristotle's famous claim that the human being is a "political animal" — an animal of the polis — means that we cannot flourish in isolation. We need genuine community, with genuine relationships of mutual obligation and care. The liberal fantasy of the self-sufficient individual is, in Aristotle's framework, not a vision of freedom but a form of impoverishment.

Third, eudaimonia has a temporal structure: it describes a life, not a moment. "One swallow does not make a spring," Aristotle writes. A single good day does not constitute a flourishing life. The question of whether a life has been well-lived can only be answered when the life is complete.`,
      },
      {
        id: 'ch-04-s3',
        title: 'Vocation vs. Career',
        keywords: ['vocation', 'calling', 'career', 'work', 'craft', 'service'],
        content: `The theologian Frederick Buechner defined vocation as "the place where your deep gladness and the world's deep hunger meet." This is not a career advice formulation. It is a challenge: to locate the intersection of what you can uniquely offer and what is genuinely needed — and to have the courage to live there, even when it is inconvenient.

Most of us, most of the time, treat work as a means to an end: money, status, security, identity. This is understandable. Work has to pay. But the question of whether it has to be only transactional — whether it can also carry meaning in itself — is one that philosophers across traditions have answered consistently in the affirmative.

The craftsperson who takes pride in quality. The teacher who cares about the growth of her students beyond her contractual obligations. The nurse who holds a dying patient's hand. These are not naive idealists. They are people who have discovered what the psychologist Martin Seligman calls "engagement" — work that draws on strengths, that challenges, that contributes to something beyond the self.

The career counseling literature distinguishes between a job (work done purely for instrumental gain), a career (work organized around advancement and recognition), and a calling (work experienced as intrinsically meaningful and as a contribution to the world). These are not fixed categories: the same activity can be experienced as any of the three, depending on the orientation of the person doing it. The hospital janitor who understands herself as part of a team that heals people — who takes pride in maintaining an environment where healing is possible — reports higher engagement and satisfaction than the janitor who understands her work as simply cleaning floors.

The capacity to find calling in work is not unlimited — some working conditions are genuinely dehumanizing, and no amount of reframing transforms them. But within a much wider range than most people assume, vocation is less about what you do and more about how you relate to it.`,
      },
    ],
  },
  {
    id: 'ch-05',
    number: 5,
    title: 'Relationships and the Self',
    subtitle: 'How We Are Shaped by Those We Love',
    summary: 'The most profound truth about human identity is that we do not construct it alone. This chapter explores how our relationships — with parents, partners, friends, communities — are not just context for the self but constitutive of it, and what this means for how we love.',
    wordCount: 8600,
    keywords: ['relationships', 'love', 'identity', 'attachment', 'community', 'belonging'],
    sections: [
      {
        id: 'ch-05-s1',
        title: 'The Relational Self',
        keywords: ['relational self', 'identity', 'social', 'interconnection', 'other'],
        content: `One of the deepest assumptions of Western modernity is that the self is prior to its relationships — that there is a "me" that existed before I entered into connection with others, and that my relationships are things I choose to add to this pre-existing self. On this picture, relationships are accessories: you can add them or remove them without affecting who you fundamentally are.

This assumption is wrong, and its wrongness has consequences.

The philosopher Charles Taylor argues that the self is always already embedded in what he calls "webs of interlocution" — the ongoing conversations and relationships through which we understand ourselves and others. We do not first develop an identity and then seek recognition for it. We develop an identity through the process of seeking recognition. Who I am is partly constituted by who recognizes me and how.

This is not just philosophy. It is developmental psychology. The pioneering attachment theorist John Bowlby demonstrated in the 1960s and 70s that the infant's earliest relationships with caregivers are not merely instrumental (the parent provides food, warmth, safety) but constitutive: they literally shape the developing nervous system, creating what Bowlby called "internal working models" — templates for how relationships work, how trustworthy others are, how worthy of love the self is.

These models, formed in the first years of life before explicit memory exists, continue to influence adult relationships in ways that are often not conscious. The adult who expects abandonment because she was abandoned; the one who cannot accept care because he was taught it was unsafe to need it; the one who performs a false self because the true one was consistently rejected — these patterns were not chosen. They were learned. And they can, with work, be unlearned.`,
      },
      {
        id: 'ch-05-s2',
        title: 'On Genuine Love',
        keywords: ['love', 'agape', 'eros', 'care', 'commitment', 'vulnerability'],
        content: `The ancient Greeks had multiple words for what English collapses into the single word "love," and the distinctions between them matter.

Eros is passionate, desiring love — the experience of longing, of being drawn toward another. It is beautiful and powerful and not entirely voluntary. You do not decide to fall in love. It happens to you.

Philia is the love of friendship — a love characterized by reciprocal care, shared history, mutual recognition. It is warmer than eros and more stable, built through time and experience rather than felt in a single devastating moment.

Agape is something different again: a love that is not conditional on the qualities of its object. It is the love the Christian tradition associates with God, but also, in its secular form, with the love that stretches beyond the personally known to the stranger, the enemy, the abstract other. The philosopher Simone Weil called it "the creative attention to the reality of others" — seeing another person as they actually are, rather than as a projection of our own needs.

These are not just vocabulary items. They describe genuinely different orientations toward other people, with different implications for how we live.

Most of what we experience as romantic love is a mixture of eros and a more narcissistic pull: we are attracted not just to the other but to how we feel in their presence, how they reflect us, how they meet needs we may not have known we had. This is not pathological — it is human. But the love that can sustain a life together requires growing beyond it: toward something more like philia (deep friendship, respect, shared purpose) and even, in moments of grace, agape.`,
      },
      {
        id: 'ch-05-s3',
        title: 'The Practice of Belonging',
        keywords: ['community', 'belonging', 'tribe', 'loneliness', 'connection'],
        content: `Hannah Arendt observed that the most terrifying discovery of the twentieth century was not the existence of evil — evil was old news. It was the discovery of how ordinary human beings could be led to participate in it. The bureaucratic evil of the Holocaust, she argued in "The Origins of Totalitarianism," was made possible not by monsters but by people who had been effectively isolated from the networks of relationship and obligation that make ethical life possible.

This is a sobering observation. It implies that belonging — genuine membership in communities with shared values and mutual obligations — is not merely a nice-to-have. It is a moral precondition.

The sociologist Robert Putnam documented, in his landmark 2000 book "Bowling Alone," a dramatic decline in American civic participation over the previous thirty years. Church attendance, union membership, participation in civic organizations, dinner parties, card games — all in steep decline. The title comes from a finding that particularly stuck: more Americans than ever were bowling, but bowling leagues had essentially disappeared. People were bowling alone.

Putnam's account is sometimes read as nostalgia for a mythologized past. But the underlying concern is serious: when people lack membership in communities with shared commitments and regular face-to-face contact, they lose something that cannot be replaced by digital connection.

The philosopher Alasdair MacIntyre argues that virtues — the qualities of character that make a life well-lived possible — are learned within "practices": structured social activities with internal goods, standards of excellence, and ongoing communities of practitioners. You do not learn courage or honesty or practical wisdom in the abstract. You learn them by participating in communities where those virtues are practiced and valued.

This means that cultivating a meaningful life is not, ultimately, a solitary project. It requires finding, or creating, communities of shared practice — whether organized around craft, faith, neighborhood, or any other form of genuine commitment.`,
      },
    ],
  },
  {
    id: 'ch-06',
    number: 6,
    title: 'The Body and Its Wisdom',
    subtitle: 'What Philosophical Traditions Got Wrong About the Flesh',
    summary: 'Western philosophy has long treated the body as a problem — something to be transcended, controlled, or ignored. This chapter argues the opposite: that attending to the body is among the most direct routes to genuine knowledge, ethical clarity, and wellbeing.',
    wordCount: 7500,
    keywords: ['body', 'embodiment', 'somatic', 'health', 'movement', 'intuition'],
    sections: [
      {
        id: 'ch-06-s1',
        title: 'The Cartesian Legacy',
        keywords: ['descartes', 'mind-body', 'dualism', 'western philosophy', 'rationalism'],
        content: `In 1641, René Descartes sat alone by a fire and thought his way to what he believed was the most certain truth available to a thinking being: "I think, therefore I am." The cogito, as it came to be known, established the thinking mind as the seat of the self — the irreducible core of personal identity. The body, in this picture, was something the mind inhabited: a mechanism, useful but distinct.

This Cartesian dualism — the sharp separation of mind and body — was not new in 1641. Plato had gestured toward it two thousand years earlier, imagining the body as a tomb or prison for the immortal soul. But Descartes gave it a modern, scientific framing that proved enormously influential. The mind was the domain of reason, freedom, and the true self. The body was the domain of mechanism, passion, and constraint.

The consequences of this picture, compounded over centuries and institutions, are with us still. Western medicine treats the body as a machine to be repaired. Western education treats it as an inconvenient housing for the brain. Western spirituality, in its more Gnostic forms, treats it as something to be mortified or transcended.

And Western philosophy, with a few notable exceptions, has treated the deliverances of bodily experience — sensation, emotion, proprioception, gut feeling — as noise to be filtered out rather than data to be attended to.

This is a mistake. Not merely a philosophical error but a practical one, with consequences for how we understand knowledge, health, ethics, and the good life.`,
      },
      {
        id: 'ch-06-s2',
        title: 'Embodied Cognition',
        keywords: ['embodied cognition', 'somatic intelligence', 'proprioception', 'interoception'],
        content: `The cognitive revolution of the late twentieth century produced a field called embodied cognition — the study of how thinking is not merely a function of the brain but is shaped by, and inseparable from, the body as a whole. The implications are radical.

Consider the research on metaphor. George Lakoff and Mark Johnson, in their influential 1980 book "Metaphors We Live By," demonstrated that the most fundamental concepts in human thought — time, causation, morality, argument — are structured by physical experience. We understand time spatially because we move through space. We understand argument combatively because our bodies know what it is to resist and be resisted. The structure of abstract thought is built from the structure of bodily experience.

Consider the research on emotion. Antonio Damasio's famous somatic marker hypothesis proposes that emotions are not mere feelings added on top of rational cognition — they are information encoded in the body that is essential for decision-making. Patients with damage to the ventromedial prefrontal cortex, who retain all their cognitive capacities but are unable to access emotional information, become disastrously poor decision-makers. Without the body's input, reason cannot function.

Consider the research on posture. Amy Cuddy and her colleagues have documented how body posture shapes not just how others perceive us but how we perceive ourselves — how occupying a physically "powerful" posture can shift hormonal profiles and increase risk tolerance and confidence. We do not only express emotions through bodies; our bodies shape the emotions available to us.

The philosopher Maurice Merleau-Ponty called the body the "subject of perception" — not an object experienced from the outside but the very medium through which all experience is possible. To be embodied is not to be trapped in a machine. It is to have a particular, irreplaceable perspective on a world that can only be known from somewhere.`,
      },
    ],
  },
  {
    id: 'ch-07',
    number: 7,
    title: 'Time, Mortality, and What Matters',
    subtitle: 'Learning to Live With Limits',
    summary: 'Death is the fact we most consistently avoid. This chapter argues that genuinely confronting our mortality — not in a morbid way, but honestly — is the most reliable path to clarity about what actually matters.',
    wordCount: 9300,
    keywords: ['mortality', 'death', 'time', 'finitude', 'priorities', 'legacy'],
    sections: [
      {
        id: 'ch-07-s1',
        title: 'The Immortality Project',
        keywords: ['death denial', 'terror management', 'legacy', 'symbolic immortality'],
        content: `Ernest Becker won the Pulitzer Prize in 1974 for "The Denial of Death," a book that argued something uncomfortable: that most of what humans do — build civilizations, pursue fame, create art, join religions, make war — is driven by the terror of mortality. We know we will die. We cannot accept it. And so we construct what Becker called "immortality projects" — symbolic extensions of the self that we hope will outlast the body.

This is not entirely bad. The cathedrals and symphonies and political movements and scientific discoveries that have shaped human civilization were largely motivated by this same drive. The desire to matter, to leave a trace, to be remembered — these are not pathological but deeply human.

What is problematic, Becker argued, is the denial. When we are not conscious of our mortality, we tend to pursue status, recognition, and achievement in ways that are compulsive rather than genuinely free. We are driven by anxiety rather than choosing freely. And we tend to scapegoat — to project our own terror of death onto groups we can blame for our vulnerability.

Terror Management Theory, developed by social psychologists Jeff Greenberg, Sheldon Solomon, and Tom Pyszczynski in the 1980s, has produced decades of experimental confirmation for Becker's central insight. When people are reminded of their mortality — when "mortality salience" is experimentally induced — they become more defensive of their worldviews, more hostile to those who challenge their beliefs, and more willing to punish those who violate their group's norms. Mortality awareness, without conscious reflection, makes us more tribal and less clear-headed.

Conscious mortality awareness — genuinely confronting the fact of death, sitting with it rather than fleeing — has the opposite effect. The Stoics called this practice memento mori: remember that you will die. They meant it as a liberation, not a doom.`,
      },
      {
        id: 'ch-07-s2',
        title: 'The Discipline of Finitude',
        keywords: ['finitude', 'choices', 'tradeoffs', 'time management', 'priorities'],
        content: `Oliver Burkeman, in his excellent book "Four Thousand Weeks," argues that the central problem of contemporary time management is not that we are doing the wrong things. It is that we are operating within the wrong framework entirely — one that assumes we can, if only we are efficient enough, do everything. We cannot. We will not. And the refusal to accept this is making us miserable.

Four thousand weeks is what a human lifespan of eighty years contains. Burkeman uses this number not to produce despair but to produce clarity. Given that you have four thousand weeks — and that the number is probably smaller than you think, because you are almost certainly already into the middle of them — what would you actually choose to spend them on?

The answer to this question is not a time management technique. It is a confrontation with values: with what you actually care about, as opposed to what you feel obligated to care about, or what you think you are supposed to care about, or what you are afraid to not care about because then people might think less of you.

This confrontation is reliably avoided. The strategies by which we avoid it are reliably productive-looking. We optimize. We read self-improvement books. We reorganize our to-do lists. We tell ourselves that if we could just get on top of things, we would then have time for what actually matters. But what actually matters is precisely what we are using getting-on-top-of-things to avoid thinking about.

The Stoics had a practice for this too: the negative visualization, in which you deliberately imagine losing what you have — your health, your relationships, your freedom — in order to appreciate its value before it is gone. This sounds morbid. In practice, it produces something closer to gratitude.`,
      },
      {
        id: 'ch-07-s3',
        title: 'What a Good Death Reveals',
        keywords: ['good death', 'hospice', 'regrets', 'deathbed', 'clarity', 'atul gawande'],
        content: `Atul Gawande, the surgeon and writer, spent years studying how people die in American hospitals and came to a troubling conclusion: we are very good at keeping people alive and very bad at helping them die well. The technological capacities of modern medicine are applied, far too often, without honest conversation about what the patient actually wants — what kind of life, at what level of function, is worth the interventions being proposed.

The hospice movement, which Gawande describes with admiration in "Being Mortal," is built on a different understanding: that a good death — a death that is peaceful, that does not betray the values of the dying person, that allows for connection and completion — requires the same careful attention as any other medical goal. And that pursuing it often means doing less, not more.

What people want at the end of life, again and again, is surprisingly consistent: to be free of pain, to be with people they love, to have their lives feel that they mattered. Rarely do they wish they had spent more time at the office. Rarely do they regret having loved people. Often they regret not having risked more in the direction of what they actually wanted.

Bronnie Ware, an Australian palliative care nurse, collected the most common regrets of the dying and published them in a book that has become unexpectedly famous. The list is illuminating: I wish I'd had the courage to live a life true to myself, not the life others expected of me. I wish I hadn't worked so hard. I wish I'd had the courage to express my feelings. I wish I had stayed in touch with my friends. I wish that I had let myself be happier.

These are not exotic regrets. They are depressingly ordinary. Which suggests that the insight they contain is available to most of us, if we are willing to look directly at what we are doing with the finite time we have.`,
      },
    ],
  },
  {
    id: 'ch-08',
    number: 8,
    title: 'The Ethics of Everyday Life',
    subtitle: 'How Small Choices Shape the Kind of Person You Become',
    summary: 'We tend to think of ethical life as a set of big, dramatic dilemmas. But character is actually built — and eroded — in the small, unremarkable choices of ordinary days. This chapter examines how virtue is formed through practice and why our daily habits are, in fact, our ethics.',
    wordCount: 8400,
    keywords: ['ethics', 'virtue', 'character', 'habits', 'moral', 'integrity'],
    sections: [
      {
        id: 'ch-08-s1',
        title: 'Character Is What You Do When No One Is Watching',
        keywords: ['character', 'integrity', 'privacy', 'habits', 'consistency'],
        content: `The contemporary understanding of morality is largely deontological or consequentialist — it focuses on rules (do not lie, do not harm) or on outcomes (act in ways that maximize wellbeing). Both of these frameworks share an assumption: that the interesting moral question is what to do in this situation, right now.

The ancient virtue ethics tradition asks a different question: what kind of person should I be? This is not a question about a single act but about the whole shape of a life. And it leads to a different set of concerns: not just "is this action right?" but "what does doing this action repeatedly do to my character?"

The answer to this second question is not always what we would hope. We like to think that good people do good things and bad people do bad things. The research suggests that the causation frequently runs in both directions: doing good things, repeatedly, makes you more likely to be the kind of person who does good things.

The psychologist Jonathan Haidt, in his review of the moral psychology literature, argues that the popular picture of moral reasoning — in which we reason our way to moral conclusions and then act accordingly — is largely backward. More often, we act (or are disposed to act) for reasons that are not fully articulate, and we construct rationalizations afterward. Our moral reasoning, most of the time, is post-hoc justification for choices our character has already made.

This is not cause for cynicism. It is cause for attending very carefully to the development of character — to the habits of perception, attention, and response that we are building through every small, unremarked choice.`,
      },
      {
        id: 'ch-08-s2',
        title: 'The Moral Weight of Small Things',
        keywords: ['small choices', 'daily ethics', 'attention', 'care', 'ordinary morality'],
        content: `Iris Murdoch, the philosopher and novelist, argued that the most important part of moral life is almost never the dramatic decision point — the trolley problem, the lifesaving dilemma — but something much quieter: the quality of attention we bring to other people and to the world.

"The foundation of morality," she wrote, "is attention to the real." To see another person clearly — not through the distorting lens of our own needs, projections, and anxieties, but as they actually are — is both an epistemic and an ethical achievement. It requires the same discipline as any other form of careful perception: the quieting of our own noise, the suspension of our habitual interpretations, the patience to let reality show itself.

This means that the person who is genuinely kind — not performatively, not when it is convenient, but habitually, in the texture of ordinary interactions — is doing something morally significant that never makes the newspaper. The waiter who is treated with respect rather than contempt. The colleague whose idea is acknowledged rather than ignored. The child whose question is answered rather than dismissed. These are not ethical dilemmas. They are ethical practice.

Murdoch's notion of "just and loving attention" — attending to reality in a way that is both accurate and caring — resolves what seems like a tension between seeing clearly (which might be uncomfortable) and caring genuinely (which requires the other's wellbeing to matter). In her account, genuine care requires genuine perception. You cannot truly wish well for someone you have not truly seen.`,
      },
    ],
  },
  {
    id: 'ch-09',
    number: 9,
    title: 'Creativity and the Examined Life',
    subtitle: 'Why Making Things Is a Moral Act',
    summary: 'From cave paintings to code, the drive to create is among the most distinctively human impulses. This chapter argues that creativity is not merely an aesthetic or economic good — it is a mode of understanding, connection, and the fully-lived life.',
    wordCount: 7900,
    keywords: ['creativity', 'art', 'making', 'expression', 'craft', 'meaning'],
    sections: [
      {
        id: 'ch-09-s1',
        title: 'The Creative Impulse',
        keywords: ['creativity', 'drive', 'self-expression', 'making', 'human nature'],
        content: `Somewhere in the Lascaux caves of southern France, approximately seventeen thousand years ago, a human being used ochre and charcoal to paint a running horse on a cave wall. We do not know their name. We do not know their language. We do not know what they believed about the afterlife or the stars or the nature of the divine.

We know that they made something. And that the something they made has lasted longer than they could have imagined, communicating something — call it beauty, call it vitality, call it the astonishing presence of a real horse, observed and rendered with care — across an unimaginable gulf of time.

This impulse — to make, to express, to leave a trace — is not incidental to human nature. It is, many anthropologists argue, constitutive of it. No other species makes art. No other species tells stories about beings that do not exist in order to understand beings that do. No other species represents its own experience to itself in order to understand that experience better.

The philosopher Ellen Dissanayake coined the term "making special" for the human behavior that cuts across all cultures and all of recorded history: the tendency to mark the things that matter — births, deaths, harvests, transitions, encounters with the sacred — with crafted objects, ritual, song, dance, or story. Making special is not luxury. It is necessity. It is how humans signal to themselves and each other that this, here, now, matters.`,
      },
      {
        id: 'ch-09-s2',
        title: 'Making as Knowing',
        keywords: ['making', 'knowledge', 'embodied', 'craft', 'understanding', 'tacit knowledge'],
        content: `Michael Polanyi, the philosopher of science, introduced the concept of "tacit knowledge" — the knowledge that is embedded in practice rather than explicit in proposition. "We know more than we can tell," he wrote, in one of the most quoted phrases in the philosophy of knowledge.

The craftsperson knows something about wood that cannot be fully articulated in words. The musician knows something about rhythm that cannot be fully transcribed in notation. The experienced clinician knows something about patients that cannot be reduced to diagnostic criteria. This knowledge is real and important — often more reliable than explicit knowledge in domains where reality is complex and variable — but it can only be transmitted through practice, through apprenticeship, through doing under the guidance of someone who already knows.

Making things, in this framework, is a form of knowing. Not a lesser form — a form that deserves greater respect than our culture generally grants it. The culture's hierarchy — abstract knowledge at the top, manual knowledge at the bottom — is not a ranking of epistemological reliability. It is a ranking of social status that has been mistaken for a ranking of cognitive depth.

The architect Christopher Alexander spent his career arguing that good building requires a kind of knowledge that cannot be encoded in rules or specifications — a "quality without a name" that can only be learned by attending very carefully to what actually makes spaces feel alive, and by being willing to be corrected by experience rather than theory. His critique of modernist architecture was not aesthetic but epistemological: the modernists substituted abstract principle for embodied knowledge, with results that were often, in his terms, dead.

The same critique applies to any domain in which the pretense of explicit, codified, transferable knowledge replaces the development of genuine craft.`,
      },
    ],
  },
  {
    id: 'ch-10',
    number: 10,
    title: 'Toward a Philosophy of Enough',
    subtitle: 'Sufficiency, Gratitude, and the Good Life',
    summary: 'The closing chapter brings together the threads of the book in a reflection on what "enough" might mean — enough money, enough success, enough productivity — and why the answer to this question might be the most important one you ever honestly explore.',
    wordCount: 8100,
    keywords: ['enough', 'sufficiency', 'gratitude', 'contentment', 'good life', 'wisdom'],
    sections: [
      {
        id: 'ch-10-s1',
        title: 'The Insatiability Problem',
        keywords: ['insatiability', 'hedonic treadmill', 'adaptation', 'wanting', 'desire'],
        content: `The hedonic treadmill is one of the most robust and depressing findings in the psychology of wellbeing. The phenomenon is simple: we adapt rapidly to positive changes in our circumstances. The raise that seemed like it would change everything becomes, within months, the new normal. The house becomes the house. The relationship, unless actively cultivated, fades to familiar. We return, again and again, to approximately the same emotional set point, regardless of what has changed.

The implication is uncomfortable: if acquiring more does not reliably increase sustained wellbeing, what exactly are we running after?

The Buddhist tradition has a precise term for the mechanism the hedonic treadmill describes: tanha, usually translated as "craving" or "thirst." In Buddhist analysis, suffering (dukkha) arises not from having experiences but from clinging to pleasant ones and fleeing unpleasant ones — from the fundamental refusal to accept that everything that arises also passes.

The proposed remedy is not asceticism or the elimination of desire. It is something more subtle: the development of a different relationship to desire, one in which wanting arises without grasping, in which pleasure is enjoyed without the compulsive attempt to preserve it, in which difficulty is met without the compulsive attempt to flee it.

This is not a passive acceptance of whatever happens. It is an active, practiced orientation toward experience that allows for engagement without compulsion — appreciation without attachment.`,
      },
      {
        id: 'ch-10-s2',
        title: 'The Practice of Gratitude',
        keywords: ['gratitude', 'appreciation', 'joy', 'practice', 'abundance'],
        content: `"Gratitude" has become a self-help cliché, and this is unfortunate, because the practice it points toward is genuinely powerful and the research on its effects is genuinely robust.

Robert Emmons, the leading scientific researcher on gratitude, has found in dozens of studies that regular gratitude practice — systematically attending to what is good in one's life — produces measurable increases in wellbeing, improvements in physical health, stronger relationships, and greater resilience in adversity. The effects are not trivial and they are not short-lived.

But the mechanism matters. The gratitude that produces these effects is not a forced positivity that papersover genuine difficulty. It is not the Pollyanna insistence that everything is fine when everything is not fine. It is something closer to what the theologian David Steindl-Rast describes as "gratefulness" — a basic orientation of openness to the gift quality of existence.

"In grateful living," Steindl-Rast writes, "every moment is the gift. And the gift is every moment." This is not the same as enjoying every moment. It is the recognition that existence itself — consciousness, sensation, the fact of being here at all — is something that need not have been and is therefore, in a deep sense, unearned.

This recognition does not dissolve problems. But it changes their context. The person who is genuinely grateful for being alive faces the same difficulties as anyone else. They face them differently.`,
      },
      {
        id: 'ch-10-s3',
        title: 'The Examined Life',
        keywords: ['examined life', 'socrates', 'reflection', 'wisdom', 'integration'],
        content: `Socrates famously declared that the unexamined life is not worth living. This has been misread as intellectual snobbery — as a claim that only philosophers live well. That is not what he meant.

What he meant was that a life lived on autopilot — following inherited scripts, pursuing received values, never pausing to ask whether what you are doing is what you actually want to be doing — is a life in which the human capacity for self-determination is largely unused. It is, in that sense, a lesser life: not morally worse, but less fully itself.

The examined life does not require a philosophy degree. It requires the willingness to ask, regularly and honestly: What am I doing? Why am I doing it? Is this how I want to spend my finite time? What do I actually value, as opposed to what I have been told to value? Am I living in accordance with what I believe is important?

These questions are not comfortable. They can produce anxiety, guilt, and the unsettling recognition that the life you have built is, in some ways, not the life you would have chosen if you had been choosing freely. This recognition is not the end of the process. It is the beginning.

The good news — and there is good news — is that clarity, even uncomfortable clarity, is better than confusion. The person who knows what they care about, who has honestly reckon with what they are doing and why, is in a position to change what needs changing and to embrace, with genuine conviction, what is already good.

The examined life is not a destination. It is a practice — one that is never complete, always productive, and available to anyone willing to do it. This book has been an invitation to begin.`,
      },
    ],
  },
]

export const readingTime = (wordCount: number): string => {
  const minutes = Math.ceil(wordCount / 238)
  if (minutes < 60) return `${minutes} min read`
  const hours = Math.floor(minutes / 60)
  const remaining = minutes % 60
  return remaining > 0 ? `${hours}h ${remaining}m read` : `${hours}h read`
}

export const totalWords = chapters.reduce((sum, ch) => sum + ch.wordCount, 0)

export const searchChapters = (query: string) => {
  if (!query.trim()) return []
  const q = query.toLowerCase()
  const results: Array<{
    chapterId: string
    chapterNumber: number
    chapterTitle: string
    sectionId: string
    sectionTitle: string
    excerpt: string
    score: number
  }> = []

  for (const chapter of chapters) {
    const chapterScore = (chapter.title.toLowerCase().includes(q) ? 3 : 0) +
      (chapter.subtitle.toLowerCase().includes(q) ? 2 : 0) +
      (chapter.keywords.some(k => k.includes(q)) ? 2 : 0)

    for (const section of chapter.sections) {
      const sectionScore = chapterScore +
        (section.title.toLowerCase().includes(q) ? 3 : 0) +
        (section.content.toLowerCase().includes(q) ? 1 : 0) +
        (section.keywords.some(k => k.includes(q)) ? 2 : 0)

      if (sectionScore > 0) {
        const idx = section.content.toLowerCase().indexOf(q)
        const start = Math.max(0, idx - 80)
        const end = Math.min(section.content.length, idx + 160)
        const excerpt = idx >= 0
          ? '…' + section.content.slice(start, end) + '…'
          : section.content.slice(0, 200) + '…'

        results.push({
          chapterId: chapter.id,
          chapterNumber: chapter.number,
          chapterTitle: chapter.title,
          sectionId: section.id,
          sectionTitle: section.title,
          excerpt,
          score: sectionScore,
        })
      }
    }
  }

  return results.sort((a, b) => b.score - a.score).slice(0, 8)
}
