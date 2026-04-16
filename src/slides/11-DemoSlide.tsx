import { Position, ReactFlow, ReactFlowProvider, useEdgesState, useNodesState, useReactFlow } from '@xyflow/react'
import '@xyflow/react/dist/style.css'
import { AnimatePresence, motion } from 'framer-motion'
import { useCallback, useEffect, useRef, useState } from 'react'
import GlowBlob from '../components/GlowBlob'
import SlideWrapper from '../components/SlideWrapper'
import { EASE } from '../lib/animations'

interface SlideProps { step: number }
type Phase = 'form' | 'creating' | 'generating' | 'building' | 'live'

const PROJECT_NAME = 'URL Shortener Platform'
const PROJECT_DESC = 'High-performance URL shortener with real-time analytics, custom domains & team collaboration.'

const GEN_STEPS = [
  { pct: 14, label: 'Analyzing system requirements…' },
  { pct: 31, label: 'Selecting architecture patterns…' },
  { pct: 52, label: 'Mapping service topology…' },
  { pct: 70, label: 'Configuring service connections…' },
  { pct: 87, label: 'Generating component graph…' },
  { pct: 100, label: 'Architecture ready ✶' },
]

const NODE_ORDER = ['client', 'lb', 'gateway', 'auth', 'core', 'ai', 'cache', 'db', 'queue']

const ns = (accent = false, live = false): React.CSSProperties => ({
  background: live ? 'rgba(0,135,248,0.18)' : accent ? 'rgba(0,135,248,0.10)' : 'rgba(18,18,24,0.95)',
  border: `1px solid ${live ? 'rgba(0,135,248,0.9)' : accent ? 'rgba(0,135,248,0.55)' : 'rgba(255,255,255,0.13)'}`,
  borderRadius: '10px', padding: '9px 16px',
  color: live ? '#44c4f6' : accent ? '#0087f8' : '#e2e8f0',
  fontFamily: '"JetBrains Mono", monospace', fontSize: '12px', fontWeight: 500,
  minWidth: '120px', textAlign: 'center' as const,
  boxShadow: live ? '0 0 28px rgba(0,135,248,0.4),0 4px 20px rgba(0,0,0,0.5)' : accent ? '0 0 14px rgba(0,135,248,0.15),0 4px 14px rgba(0,0,0,0.4)' : '0 4px 14px rgba(0,0,0,0.4)',
  transition: 'all 0.35s ease',
})
const es = () => ({ stroke: '#0087f8', strokeWidth: 1.5 })

const ALL_NODES = [
  { id: 'client',  position: { x: 310, y: 0 },   data: { label: '◉ Client App' },   style: ns(),      sourcePosition: Position.Bottom, targetPosition: Position.Top },
  { id: 'lb',      position: { x: 310, y: 100 },  data: { label: '⇄ Load Balancer' },style: ns(true),  sourcePosition: Position.Bottom, targetPosition: Position.Top },
  { id: 'gateway', position: { x: 310, y: 200 },  data: { label: '⬡ API Gateway' },  style: ns(true),  sourcePosition: Position.Bottom, targetPosition: Position.Top },
  { id: 'auth',    position: { x: 60,  y: 310 },  data: { label: '⊕ Auth' },          style: ns(),      sourcePosition: Position.Bottom, targetPosition: Position.Top },
  { id: 'core',    position: { x: 310, y: 310 },  data: { label: '⚙ Core Service' }, style: ns(),      sourcePosition: Position.Bottom, targetPosition: Position.Top },
  { id: 'ai',      position: { x: 560, y: 310 },  data: { label: '✶ AI Engine' },    style: ns(true),  sourcePosition: Position.Bottom, targetPosition: Position.Top },
  { id: 'cache',   position: { x: 80,  y: 420 },  data: { label: '⚡ Cache' },         style: ns(),      sourcePosition: Position.Bottom, targetPosition: Position.Top },
  { id: 'db',      position: { x: 310, y: 420 },  data: { label: '◫ Database' },     style: ns(),      sourcePosition: Position.Bottom, targetPosition: Position.Top },
  { id: 'queue',   position: { x: 520, y: 420 },  data: { label: '↷ Queue' },         style: ns(),      sourcePosition: Position.Bottom, targetPosition: Position.Top },
]
const ALL_EDGES = [
  { id: 'e1', source: 'client',  target: 'lb',      animated: true, style: es() },
  { id: 'e2', source: 'lb',      target: 'gateway',  animated: true, style: es() },
  { id: 'e3', source: 'gateway', target: 'auth',     animated: true, style: es() },
  { id: 'e4', source: 'gateway', target: 'core',     animated: true, style: es() },
  { id: 'e5', source: 'gateway', target: 'ai',       animated: true, style: es() },
  { id: 'e6', source: 'core',    target: 'cache',    animated: true, style: es() },
  { id: 'e7', source: 'core',    target: 'db',       animated: true, style: es() },
  { id: 'e8', source: 'core',    target: 'queue',    animated: true, style: es() },
]

function useTypewriter(target: string, active: boolean, speed = 38) {
  const [text, setText] = useState('')
  const ref = useRef<ReturnType<typeof setInterval> | null>(null)
  useEffect(() => {
    if (!active) return
    let i = 0; setText('')
    ref.current = setInterval(() => {
      i++; setText(target.slice(0, i))
      if (i >= target.length && ref.current) clearInterval(ref.current)
    }, speed)
    return () => { if (ref.current) clearInterval(ref.current) }
  }, [active, target, speed])
  return { text, done: text.length >= target.length }
}

function BrowserFrame({ children, url = 'app.avylo.ai/project/create' }: { children: React.ReactNode; url?: string }) {
  return (
    <div className="w-full rounded-xl overflow-hidden" style={{ border: '1px solid rgba(255,255,255,0.09)', boxShadow: '0 24px 80px rgba(0,0,0,0.7)' }}>
      <div className="flex items-center gap-3 px-4 py-2.5" style={{ background: 'rgba(20,20,26,0.98)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="flex gap-1.5 shrink-0">
          <div className="w-3 h-3 rounded-full" style={{ background: '#ff5f57' }} />
          <div className="w-3 h-3 rounded-full" style={{ background: '#febc2e' }} />
          <div className="w-3 h-3 rounded-full" style={{ background: '#28c840' }} />
        </div>
        <div className="flex-1 rounded-md px-3 py-1 text-center font-mono text-[11px]" style={{ background: 'rgba(255,255,255,0.05)', color: 'rgba(176,188,200,0.7)' }}>{url}</div>
      </div>
      {children}
    </div>
  )
}

function AppNav() {
  return (
    <div className="flex items-center justify-between px-5 py-2.5" style={{ background: 'rgba(13,15,20,0.99)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="flex items-center gap-6">
        <img src="/Logo.png" alt="Avylo" style={{ height: 18, width: 'auto' }} />
        <div className="hidden sm:flex items-center gap-5">
          {['Home', 'Library', 'Templates'].map(item => (<span key={item} className="text-[12px]" style={{ color: 'rgba(176,188,200,0.6)' }}>{item}</span>))}
        </div>
      </div>
      <div className="px-4 py-1.5 rounded-lg text-white text-[11px] font-semibold" style={{ background: 'linear-gradient(135deg,#0087f8,#44c4f6)' }}>New Project</div>
    </div>
  )
}

interface FormProps {
  typedName: string; nameDone: boolean; typedDesc: string; descActive: boolean
  selectedType: string | null; tags: string[]; selectedDB: string | null
  selectedScale: string | null; btnActive: boolean
}

function FormPhase(p: FormProps) {
  return (
    <motion.div initial={{ opacity: 0, y: 16, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -10, scale: 0.98 }} transition={{ duration: 0.5, ease: EASE }} className="w-full max-w-lg mx-auto">
      <BrowserFrame>
        <AppNav />
        <div className="px-5 py-4" style={{ background: 'rgba(11,13,18,0.99)' }}>
          <div className="mb-3">
            <p className="text-[10px] mb-0.5" style={{ color: 'rgba(176,188,200,0.45)' }}>← Back to Library</p>
            <h2 className="font-sans font-bold text-[17px] text-white">New Project</h2>
            <p className="text-[11px]" style={{ color: 'rgba(176,188,200,0.5)' }}>Describe your idea — AI will architect the rest.</p>
          </div>
          <div className="rounded-xl overflow-hidden" style={{ border: '1px solid rgba(255,255,255,0.08)', background: 'rgba(15,18,32,0.92)' }}>
            <div className="px-4 pt-4 pb-3" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
              <p className="font-mono text-[9px] tracking-[0.2em] uppercase mb-3" style={{ color: 'rgba(0,135,248,0.6)' }}>Essentials</p>
              <div className="mb-2.5">
                <label className="block text-[11px] mb-1" style={{ color: 'rgba(176,188,200,0.65)' }}>Project Name</label>
                <div className="px-3 py-2 rounded-lg flex items-center min-h-[34px]" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.09)' }}>
                  <span className="font-sans text-[12px] text-white">{p.typedName}</span>
                  {!p.nameDone && <span className="cursor-blink" />}
                </div>
              </div>
              <div className="mb-3">
                <label className="block text-[11px] mb-1" style={{ color: 'rgba(176,188,200,0.65)' }}>Describe your idea <span style={{ opacity: 0.4 }}>optional</span></label>
                <div className="px-3 py-2 rounded-lg min-h-[44px]" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.09)' }}>
                  <span className="font-sans text-[11px]" style={{ color: 'rgba(176,188,200,0.75)' }}>{p.typedDesc}</span>
                  {p.descActive && p.typedDesc.length < PROJECT_DESC.length && <span className="cursor-blink" />}
                </div>
              </div>
              <div className="mb-3">
                <label className="block text-[11px] mb-1.5" style={{ color: 'rgba(176,188,200,0.65)' }}>Project Type <span style={{ opacity: 0.4 }}>optional</span></label>
                <div className="grid grid-cols-4 gap-1.5">
                  {[{id:'SaaS Platform',icon:'▦'},{id:'Marketplace',icon:'⇄'},{id:'Internal Tool',icon:'⚙'},{id:'AI Product',icon:'✶'}].map(({id,icon}) => (
                    <motion.div key={id} animate={p.selectedType===id?{scale:[1,1.04,1]}:{}} transition={{duration:0.3}}
                      className="p-2 rounded-lg text-center"
                      style={{border:`1px solid ${p.selectedType===id?'rgba(0,135,248,0.55)':'rgba(255,255,255,0.07)'}`,background:p.selectedType===id?'rgba(0,135,248,0.09)':'rgba(255,255,255,0.02)',transition:'all 0.3s ease'}}>
                      <div className="text-sm mb-0.5" style={{color:p.selectedType===id?'#0087f8':'rgba(176,188,200,0.45)'}}>{icon}</div>
                      <p className="text-[9px] font-medium leading-tight" style={{color:p.selectedType===id?'#0087f8':'rgba(176,188,200,0.65)'}}>{id}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
              <AnimatePresence>
                {p.tags.length > 0 && (
                  <motion.div initial={{opacity:0,height:0}} animate={{opacity:1,height:'auto'}} className="mb-2">
                    <label className="block text-[11px] mb-1" style={{color:'rgba(176,188,200,0.65)'}}>Core Features</label>
                    <div className="flex flex-wrap gap-1.5">
                      {p.tags.map(tag=>(<motion.span key={tag} initial={{opacity:0,scale:0.8}} animate={{opacity:1,scale:1}} className="px-2.5 py-0.5 rounded-full text-[10px] font-medium" style={{background:'rgba(0,135,248,0.14)',border:'1px solid rgba(0,135,248,0.3)',color:'#44c4f6'}}>{tag}</motion.span>))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <AnimatePresence>
              {(p.selectedDB || p.selectedScale) && (
                <motion.div initial={{opacity:0,height:0}} animate={{opacity:1,height:'auto'}} exit={{opacity:0,height:0}} className="px-4 py-3" style={{borderBottom:'1px solid rgba(255,255,255,0.05)'}}>
                  <p className="font-mono text-[9px] tracking-[0.2em] uppercase mb-2.5" style={{color:'rgba(0,135,248,0.5)'}}>Tech &amp; Constraints</p>
                  <div className="flex flex-wrap gap-4">
                    {p.selectedScale && (
                      <div>
                        <p className="text-[10px] mb-1" style={{color:'rgba(176,188,200,0.5)'}}>Scale</p>
                        <div className="flex gap-1.5">
                          {['MVP','Startup','Large Scale'].map(s=>(<span key={s} className="px-2 py-0.5 rounded-md text-[10px]" style={{background:p.selectedScale===s?'rgba(0,135,248,0.15)':'rgba(255,255,255,0.04)',border:`1px solid ${p.selectedScale===s?'rgba(0,135,248,0.4)':'rgba(255,255,255,0.07)'}`,color:p.selectedScale===s?'#0087f8':'rgba(176,188,200,0.45)'}}>{s}</span>))}
                        </div>
                      </div>
                    )}
                    {p.selectedDB && (
                      <div>
                        <p className="text-[10px] mb-1" style={{color:'rgba(176,188,200,0.5)'}}>Database</p>
                        <div className="flex gap-1.5">
                          {['PostgreSQL','MongoDB','Redis'].map(d=>(<span key={d} className="px-2 py-0.5 rounded-md text-[10px]" style={{background:p.selectedDB===d?'rgba(0,135,248,0.15)':'rgba(255,255,255,0.04)',border:`1px solid ${p.selectedDB===d?'rgba(0,135,248,0.4)':'rgba(255,255,255,0.07)'}`,color:p.selectedDB===d?'#0087f8':'rgba(176,188,200,0.45)'}}>{d}</span>))}
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            <div className="px-4 py-3">
              <motion.div animate={p.btnActive?{boxShadow:['0 0 0px rgba(0,135,248,0)','0 0 28px rgba(0,135,248,0.5)','0 0 16px rgba(0,135,248,0.3)']}:{}} transition={{duration:0.7,repeat:p.btnActive?Infinity:0,repeatType:'reverse'}}
                className="w-full py-2.5 rounded-lg font-sans font-semibold text-[13px] text-center"
                style={{background:p.btnActive?'linear-gradient(135deg,#0087f8,#44c4f6)':'rgba(255,255,255,0.06)',border:`1px solid ${p.btnActive?'rgba(0,135,248,0.4)':'rgba(255,255,255,0.09)'}`,color:p.btnActive?'#fff':'rgba(176,188,200,0.35)',transition:'background 0.4s ease,color 0.4s ease'}}>
                Create Project →
              </motion.div>
            </div>
          </div>
        </div>
      </BrowserFrame>
    </motion.div>
  )
}

function GeneratingPhase({ progress, stepIdx }: { progress: number; stepIdx: number }) {
  return (
    <motion.div initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.02 }} transition={{ duration: 0.5, ease: EASE }} className="w-full max-w-lg mx-auto">
      <BrowserFrame url="app.avylo.ai/project/generating">
        <AppNav />
        <div className="flex flex-col items-center px-8 py-8" style={{ background: 'rgba(11,13,18,0.99)', minHeight: 250 }}>
          <motion.div animate={{ scale: [1,1.12,1], opacity: [0.7,1,0.7] }} transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }} className="mb-5">
            <img src="/LogoSymbol.png" alt="Avylo" style={{ height: 36, width: 'auto', filter: 'drop-shadow(0 0 16px rgba(0,135,248,0.6))' }} />
          </motion.div>
          <h3 className="font-sans font-bold text-white text-[15px] mb-1 text-center">Generating your architecture</h3>
          <p className="text-[11px] mb-5 text-center" style={{ color: 'rgba(176,188,200,0.5)' }}>AI is analyzing and structuring your system</p>
          <div className="w-full rounded-full overflow-hidden mb-3" style={{ background: 'rgba(255,255,255,0.07)', height: 5 }}>
            <motion.div animate={{ width: `${progress}%` }} transition={{ duration: 0.9, ease: EASE }} className="h-full rounded-full" style={{ background: 'linear-gradient(90deg,#0087f8,#44c4f6)' }} />
          </div>
          <div className="w-full flex justify-between mb-5">
            <span className="font-mono text-[10px]" style={{ color: 'rgba(176,188,200,0.4)' }}>Avylo AI</span>
            <span className="font-mono text-[10px]" style={{ color: progress === 100 ? '#0087f8' : 'rgba(176,188,200,0.4)' }}>{progress}%</span>
          </div>
          <div className="w-full space-y-1.5">
            {GEN_STEPS.slice(0, stepIdx + 1).map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.35, ease: EASE }} className="flex items-center gap-2.5">
                <span className="text-[11px]" style={{ color: i < stepIdx ? '#28c840' : '#0087f8' }}>{i < stepIdx ? '✓' : '⟳'}</span>
                <span className="font-mono text-[10px]" style={{ color: i < stepIdx ? 'rgba(176,188,200,0.45)' : 'rgba(176,188,200,0.85)' }}>{s.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </BrowserFrame>
    </motion.div>
  )
}

function DiagramInner({ visibleNodeIds, isLive }: { visibleNodeIds: string[]; isLive: boolean }) {
  const { fitView } = useReactFlow()
  const currNodes = ALL_NODES.filter(n => visibleNodeIds.includes(n.id)).map(n => ({ ...n, style: ns(['lb','gateway','ai'].includes(n.id), isLive) }))
  const currEdges = ALL_EDGES.filter(e => NODE_ORDER.indexOf(e.source) < visibleNodeIds.length && NODE_ORDER.indexOf(e.target) < visibleNodeIds.length)
  const [nodes, setNodes, onNodesChange] = useNodesState(currNodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState(currEdges)
  useEffect(() => { setNodes(currNodes); setEdges(currEdges) }, [visibleNodeIds.length, isLive]) // eslint-disable-line
  useEffect(() => {
    const t = setTimeout(() => fitView({ padding: 0.28, duration: 500 }), 80)
    return () => clearTimeout(t)
  }, [visibleNodeIds.length, fitView])
  return (
    <ReactFlow nodes={nodes} edges={edges} onNodesChange={onNodesChange} onEdgesChange={onEdgesChange}
      fitView fitViewOptions={{ padding: 0.28 }} nodesDraggable={false} nodesConnectable={false}
      elementsSelectable={false} zoomOnScroll={false} panOnDrag={false} panOnScroll={false}
      preventScrolling proOptions={{ hideAttribution: true }} />
  )
}

function CanvasToolbar({ lastNode, isLive, onReplay }: { lastNode?: string; isLive: boolean; onReplay: () => void }) {
  const nodeLabels: Record<string, string> = {
    client:'Client App initialized', lb:'Load Balancer added', gateway:'API Gateway connected',
    auth:'Auth Service attached', core:'Core Service online', ai:'AI Engine integrated',
    cache:'Cache layer added', db:'Database connected', queue:'Queue configured',
  }
  return (
    <div className="flex items-center justify-between px-4 py-2 shrink-0" style={{ background: 'rgba(14,14,20,0.97)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="flex items-center gap-2">
        <img src="/Logo.png" alt="" style={{ height: 16, width: 'auto', marginRight: 6 }} />
        {['Layout','Export'].map(t => (<span key={t} className="px-2 py-1 text-[10px] rounded hidden sm:inline-block" style={{ background: 'rgba(255,255,255,0.04)', color: 'rgba(176,188,200,0.6)', border: '1px solid rgba(255,255,255,0.07)' }}>{t}</span>))}
        <span className="w-px h-4" style={{ background: 'rgba(255,255,255,0.1)' }} />
        <span className="px-2 py-1 text-[10px] rounded" style={{ background: 'rgba(0,135,248,0.15)', color: '#0087f8', border: '1px solid rgba(0,135,248,0.35)' }}>AI</span>
        <span className="px-2 py-1 text-[10px] rounded" style={{ background: 'rgba(68,196,246,0.12)', color: '#44c4f6', border: '1px solid rgba(68,196,246,0.3)' }}>Auto</span>
      </div>
      <div className="flex items-center gap-2">
        <AnimatePresence mode="wait">
          <motion.span key={lastNode} initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -4 }} className="font-mono text-[10px] hidden sm:block" style={{ color: isLive ? '#0087f8' : 'rgba(176,188,200,0.55)' }}>
            {isLive ? 'System is live ✶' : (lastNode ? nodeLabels[lastNode] : 'Building…')}
          </motion.span>
        </AnimatePresence>
        {isLive && (
          <motion.button initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} onClick={onReplay} data-no-nav className="px-2.5 py-1 text-[10px] rounded-md font-mono" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', color: 'rgba(176,188,200,0.7)' }}>
            ↺ replay
          </motion.button>
        )}
      </div>
    </div>
  )
}

export default function DemoSlide(_: SlideProps) {
  const [phase, setPhase] = useState<Phase>('form')
  const [typingName, setTypingName] = useState(false)
  const [typingDesc, setTypingDesc] = useState(false)
  const [selectedType, setSelectedType] = useState<string | null>(null)
  const [tags, setTags] = useState<string[]>([])
  const [selectedDB, setSelectedDB] = useState<string | null>(null)
  const [selectedScale, setSelectedScale] = useState<string | null>(null)
  const [btnActive, setBtnActive] = useState(false)
  const [genProgress, setGenProgress] = useState(0)
  const [genStepIdx, setGenStepIdx] = useState(-1)
  const [visibleNodeIds, setVisibleNodeIds] = useState<string[]>([])
  const [isLive, setIsLive] = useState(false)
  const timersRef = useRef<ReturnType<typeof setTimeout>[]>([])
  const { text: typedName, done: nameDone } = useTypewriter(PROJECT_NAME, typingName, 42)
  const { text: typedDesc } = useTypewriter(PROJECT_DESC, typingDesc, 22)

  const runSequence = useCallback(() => {
    timersRef.current.forEach(clearTimeout); timersRef.current = []
    const t = (ms: number, fn: () => void) => { const id = setTimeout(fn, ms); timersRef.current.push(id) }
    setPhase('form'); setTypingName(false); setTypingDesc(false)
    setSelectedType(null); setTags([]); setSelectedDB(null); setSelectedScale(null)
    setBtnActive(false); setGenProgress(0); setGenStepIdx(-1); setVisibleNodeIds([]); setIsLive(false)
    t(500,  () => setTypingName(true))
    t(2300, () => setTypingDesc(true))
    t(4400, () => setSelectedType('SaaS Platform'))
    t(4900, () => setTags(['Auth']))
    t(5300, () => setTags(['Auth', 'Analytics']))
    t(5700, () => setTags(['Auth', 'Analytics', 'Rate Limiting']))
    t(6200, () => setSelectedDB('PostgreSQL'))
    t(6700, () => setSelectedScale('Startup'))
    t(7300, () => setBtnActive(true))
    t(8000, () => setPhase('creating'))
    t(8500, () => setPhase('generating'))
    GEN_STEPS.forEach(({ pct }, i) => { t(8800 + i * 1000, () => { setGenProgress(pct); setGenStepIdx(i) }) })
    t(15000, () => setPhase('building'))
    NODE_ORDER.forEach((id, i) => { t(15600 + i * 550, () => setVisibleNodeIds(prev => [...prev, id])) })
    t(15600 + NODE_ORDER.length * 550 + 700, () => { setIsLive(true); setPhase('live') })
  }, [])

  useEffect(() => {
    const id = setTimeout(runSequence, 400)
    return () => { clearTimeout(id); timersRef.current.forEach(clearTimeout) }
  }, [runSequence])

  const showDiagram = phase === 'building' || phase === 'live'
  const showGenerating = phase === 'generating'
  const showForm = phase === 'form' || phase === 'creating'
  const lastNode = visibleNodeIds[visibleNodeIds.length - 1]

  return (
    <SlideWrapper>
      <GlowBlob className="top-0 right-0" color="primary" size={400} opacity={0.04} />
      <GlowBlob className="bottom-0 left-0" color="secondary" size={350} opacity={0.03} />
      <AnimatePresence>
        {!showDiagram && (
          <motion.div initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }}
            className="absolute top-16 left-0 right-0 flex flex-col items-center z-10 px-4 pointer-events-none text-center">
            <p className="font-mono text-[10px] tracking-[0.22em] uppercase mb-1" style={{ color: 'rgba(0,135,248,0.7)' }}>11 — Live Demo</p>
            <h2 className="font-sans font-bold text-white leading-tight" style={{ fontSize: 'clamp(18px,2.5vw,28px)' }}>
              Architecture{' '}
              <span style={{ background: 'linear-gradient(135deg,#0087f8,#44c4f6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>generation</span>
            </h2>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="absolute flex items-center justify-center px-4"
        style={{ top: showDiagram ? '52px' : '135px', bottom: '56px', left: 0, right: 0, transition: 'top 0.5s ease' }}>
        <AnimatePresence mode="wait">
          {showForm && (
            <FormPhase key="form" typedName={typedName} nameDone={nameDone} typedDesc={typedDesc} descActive={typingDesc}
              selectedType={selectedType} tags={tags} selectedDB={selectedDB} selectedScale={selectedScale} btnActive={btnActive} />
          )}
          {showGenerating && (
            <GeneratingPhase key="gen" progress={genProgress} stepIdx={genStepIdx} />
          )}
          {showDiagram && (
            <motion.div key="diagram" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, ease: EASE }}
              className="absolute inset-0 flex flex-col overflow-hidden" data-no-nav>
              <CanvasToolbar lastNode={lastNode} isLive={isLive} onReplay={runSequence} />
              <div className="flex-1 relative" style={{ background: 'rgba(10,10,16,0.98)' }}>
                {isLive && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="absolute inset-0 pointer-events-none z-10"
                    style={{ background: 'radial-gradient(ellipse at center,rgba(0,135,248,0.07) 0%,transparent 70%)' }} />
                )}
                {visibleNodeIds.length === 0 ? (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div animate={{ scale: [1,1.08,1], opacity: [0.4,0.8,0.4] }} transition={{ duration: 2, repeat: Infinity }}>
                      <img src="/LogoSymbol.png" alt="" style={{ height: 32, margin: '0 auto', filter: 'drop-shadow(0 0 12px rgba(0,135,248,0.5))' }} />
                    </motion.div>
                  </div>
                ) : (
                  <ReactFlowProvider>
                    <DiagramInner visibleNodeIds={visibleNodeIds} isLive={isLive} />
                  </ReactFlowProvider>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </SlideWrapper>
  )
}
