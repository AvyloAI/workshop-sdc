import { Position, type Edge, type Node } from '@xyflow/react'
import type React from 'react'

export type FlowStep = {
  nodes: Node[]
  edges: Edge[]
}

/* ── Node style factory ─────────────────────────────────────────── */
const nodeStyle = (accent = false, live = false): React.CSSProperties => ({
  background: live
    ? 'rgba(0, 135, 248, 0.18)'
    : accent
    ? 'rgba(0, 135, 248, 0.10)'
    : 'rgba(22, 22, 28, 0.92)',
  border: `1px solid ${live ? 'rgba(0,135,248,0.9)' : accent ? 'rgba(0, 135, 248, 0.55)' : 'rgba(255,255,255,0.12)'}`,
  borderRadius: '10px',
  padding: '10px 18px',
  color: live ? '#44c4f6' : accent ? '#0087f8' : '#e2e8f0',
  fontFamily: '"JetBrains Mono", monospace',
  fontSize: '12px',
  fontWeight: '500',
  backdropFilter: 'blur(16px)',
  minWidth: '120px',
  textAlign: 'center' as const,
  boxShadow: live
    ? '0 0 32px rgba(0,135,248,0.35), 0 4px 20px rgba(0,0,0,0.5)'
    : accent
    ? '0 0 16px rgba(0,135,248,0.15), 0 4px 16px rgba(0,0,0,0.4)'
    : '0 4px 16px rgba(0,0,0,0.4)',
  transition: 'all 0.4s ease',
})

const edgeStyle = () => ({
  stroke: '#0087f8',
  strokeWidth: 1.5,
})

/* ── Node definitions ───────────────────────────────────────────── */
const allNodes: Node[] = [
  {
    id: 'client',
    position: { x: 350, y: 0 },
    data: { label: '◉ Client App' },
    style: nodeStyle(false),
    sourcePosition: Position.Bottom,
    targetPosition: Position.Top,
  },
  {
    id: 'lb',
    position: { x: 350, y: 110 },
    data: { label: '⇄ Load Balancer' },
    style: nodeStyle(true),
    sourcePosition: Position.Bottom,
    targetPosition: Position.Top,
  },
  {
    id: 'gateway',
    position: { x: 350, y: 220 },
    data: { label: '⬡ API Gateway' },
    style: nodeStyle(true),
    sourcePosition: Position.Bottom,
    targetPosition: Position.Top,
  },
  {
    id: 'auth',
    position: { x: 80, y: 340 },
    data: { label: '🔒 Auth' },
    style: nodeStyle(false),
    sourcePosition: Position.Bottom,
    targetPosition: Position.Top,
  },
  {
    id: 'core',
    position: { x: 350, y: 340 },
    data: { label: '⚙ Core Service' },
    style: nodeStyle(false),
    sourcePosition: Position.Bottom,
    targetPosition: Position.Top,
  },
  {
    id: 'ai',
    position: { x: 620, y: 340 },
    data: { label: '✦ AI Engine' },
    style: nodeStyle(true),
    sourcePosition: Position.Bottom,
    targetPosition: Position.Top,
  },
  {
    id: 'cache',
    position: { x: 130, y: 460 },
    data: { label: '⚡ Cache' },
    style: nodeStyle(false),
    sourcePosition: Position.Bottom,
    targetPosition: Position.Top,
  },
  {
    id: 'db',
    position: { x: 350, y: 460 },
    data: { label: '◫ Database' },
    style: nodeStyle(false),
    sourcePosition: Position.Bottom,
    targetPosition: Position.Top,
  },
  {
    id: 'queue',
    position: { x: 570, y: 460 },
    data: { label: '↷ Queue' },
    style: nodeStyle(false),
    sourcePosition: Position.Bottom,
    targetPosition: Position.Top,
  },
]

const allEdges: Edge[] = [
  { id: 'e1', source: 'client',  target: 'lb',      animated: true, style: edgeStyle() },
  { id: 'e2', source: 'lb',      target: 'gateway',  animated: true, style: edgeStyle() },
  { id: 'e3', source: 'gateway', target: 'auth',     animated: true, style: edgeStyle() },
  { id: 'e4', source: 'gateway', target: 'core',     animated: true, style: edgeStyle() },
  { id: 'e5', source: 'gateway', target: 'ai',       animated: true, style: edgeStyle() },
  { id: 'e6', source: 'core',    target: 'cache',    animated: true, style: edgeStyle() },
  { id: 'e7', source: 'core',    target: 'db',       animated: true, style: edgeStyle() },
  { id: 'e8', source: 'core',    target: 'queue',    animated: true, style: edgeStyle() },
]

/* ── Progressive reveal order ────────────────────────────────────── */
const NODE_ORDER = ['client', 'lb', 'gateway', 'auth', 'core', 'ai', 'cache', 'db', 'queue']
const EDGE_ORDER = ['e1', 'e2', 'e3', 'e4', 'e5', 'e6', 'e7', 'e8']

export function getFlowAtStep(step: number): FlowStep {
  const visibleNodeIds = NODE_ORDER.slice(0, step)
  // Edges appear one step behind the node they connect to
  const visibleEdgeIds = step < 2 ? [] : EDGE_ORDER.slice(0, step - 1)
  const isLive = step >= NODE_ORDER.length + 1

  const nodes = allNodes
    .filter(n => visibleNodeIds.includes(n.id))
    .map(n => ({
      ...n,
      style: isLive ? nodeStyle(n.data.label?.toString().includes('✦') || n.data.label?.toString().includes('⬡') || n.data.label?.toString().includes('⇄'), true)
                    : nodeStyle(n.id === 'lb' || n.id === 'gateway' || n.id === 'ai'),
    }))

  const edges = allEdges.filter(e => visibleEdgeIds.includes(e.id))

  return { nodes, edges }
}
