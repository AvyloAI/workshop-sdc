import {
  ReactFlow,
  useEdgesState,
  useNodesState,
} from '@xyflow/react'
import '@xyflow/react/dist/style.css'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect } from 'react'
import GlowBlob from '../components/GlowBlob'
import MonoLabel from '../components/MonoLabel'
import SlideWrapper from '../components/SlideWrapper'
import { EASE, fadeUp, stagger } from '../lib/animations'
import { getFlowAtStep } from '../lib/flow-nodes'

interface SlideProps { step: number }

const stepLabels: Record<number, string> = {
  0: 'Press Space to start building…',
  1: 'Client App initialized',
  2: 'Load Balancer added',
  3: 'API Gateway connected',
  4: 'Auth Service attached',
  5: 'Core Service online',
  6: 'AI Engine integrated',
  7: 'Cache + Database + Queue linked',
  8: 'System is live ✦',
}

export default function DemoSlide({ step }: SlideProps) {
  const { nodes: initialNodes, edges: initialEdges } = getFlowAtStep(step)
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges)

  useEffect(() => {
    const { nodes: n, edges: e } = getFlowAtStep(step)
    setNodes(n)
    setEdges(e)
  }, [step, setNodes, setEdges])

  const label = stepLabels[step] ?? stepLabels[7]

  return (
    <SlideWrapper>
      <GlowBlob className="top-0 right-0" color="primary" size={400} opacity={0.05} />
      <GlowBlob className="bottom-0 left-0" color="secondary" size={350} opacity={0.04} />

      {/* Top section */}
      <div className="absolute top-16 left-0 right-0 flex flex-col items-center z-10 px-8">
        <motion.div variants={stagger} initial="hidden" animate="visible" className="text-center mb-6">
          <motion.div variants={fadeUp} className="mb-3">
            <MonoLabel>10 — Live Demo</MonoLabel>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="font-sans font-bold leading-tight tracking-tight"
            style={{ fontSize: 'clamp(24px, 3vw, 40px)' }}
          >
            Architecture{' '}
            <span className="gradient-text">generation</span>
          </motion.h2>
        </motion.div>

        {/* Step label */}
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: EASE }}
            className="font-mono text-[12px] tracking-widest uppercase"
            style={{ color: step === 8 ? '#0087f8' : '#94a3b8' }}
          >
            {label}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* React Flow canvas */}
      <div
        className="absolute inset-0"
        style={{ top: '180px', bottom: '60px', left: '8%', right: '8%' }}
      >
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          fitView
          fitViewOptions={{ padding: 0.3 }}
          nodesDraggable={false}
          nodesConnectable={false}
          elementsSelectable={false}
          zoomOnScroll={false}
          panOnDrag={false}
          panOnScroll={false}
          preventScrolling
          proOptions={{ hideAttribution: true }}
        >
        </ReactFlow>
      </div>
    </SlideWrapper>
  )
}
