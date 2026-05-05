<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'

const root = ref<HTMLElement | null>(null)
let cleanupAnimations: (() => void) | undefined

const navItems = [
  { label: '方法', target: '#method' },
  { label: '能力', target: '#capability' },
  { label: '系统', target: '#system' },
  { label: '落地', target: '#proof' }
]

const metrics = [
  { value: 21, suffix: '天', label: '完成首个业务闭环' },
  { value: 6, suffix: '层', label: '企业智能操作系统' },
  { value: 38, suffix: '%', label: '平均压缩决策路径' }
]

const capabilityPanels = [
  {
    code: '01',
    title: '策略智能',
    text: '把市场、客户、供应链和项目信号接入同一张决策地图，让增长判断不再靠碎片会议。'
  },
  {
    code: '02',
    title: '智能体工厂',
    text: '为销售、运营、研发和服务团队组装专属 agent，并把权限、记忆、复核和回滚一并纳入设计。'
  },
  {
    code: '03',
    title: '知识网格',
    text: '沉淀企业自己的语料、流程和专家经验，让每次问答都能追溯来源，并持续更新。'
  },
  {
    code: '04',
    title: '人机协作界面',
    text: '把 AI 放到真实工作流里：审批、复盘、预测、生成、派单、复核都能被人清楚掌控。'
  }
]

const systemLayers = [
  'Identity & Permission',
  'Business Memory',
  'Agent Orchestration',
  'Decision Studio',
  'Human Review Loop',
  'Continuous Evaluation'
]

const steps = [
  {
    step: 'Scan',
    title: '切入真实业务',
    text: '先找高频、高损耗、高价值的节点，而不是从宏大平台开始。'
  },
  {
    step: 'Shape',
    title: '重塑协作协议',
    text: '定义人、系统、智能体之间的边界，给每一次自动化留下可解释的手柄。'
  },
  {
    step: 'Ship',
    title: '发布可用闭环',
    text: '用小而硬的场景上线，拿真实数据校准模型、流程和体验。'
  },
  {
    step: 'Scale',
    title: '扩展为操作系统',
    text: '从单点效率扩展到跨部门智能网络，让组织能力被持续复利。'
  }
]

const proofItems = [
  {
    label: '制造',
    signal: '异常工单 / 根因建议',
    value: '从异常工单到根因建议，平均响应时间缩短到小时级。'
  },
  {
    label: '消费',
    signal: '用户反馈 / 内容生产 / 新品洞察',
    value: '把用户反馈、内容生产和新品洞察合并成一条增长回路。'
  },
  {
    label: '教育',
    signal: '课程研发 / 学习反馈 / 教研协作',
    value: '将课程研发、学习反馈和教研协作的 AI 输出纳入可追溯链路。'
  }
]

const tickerItems = [
  'NextYou',
  'Human-led AI',
  'Agentic Workflow',
  'Decision OS',
  'Enterprise Memory'
]

const tickerLoop = [...tickerItems, ...tickerItems]
const fieldSegments = Array.from({ length: 18 }, (_, index) => index + 1)

onMounted(async () => {
  const rootEl = root.value

  if (!rootEl || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return
  }

  const [{ gsap }, { ScrollTrigger }] = await Promise.all([import('gsap'), import('gsap/ScrollTrigger')])
  gsap.registerPlugin(ScrollTrigger)

  const setX = gsap.quickTo(rootEl, '--mx', { duration: 0.45, ease: 'power3.out' })
  const setY = gsap.quickTo(rootEl, '--my', { duration: 0.45, ease: 'power3.out' })

  const movePointer = (event: PointerEvent) => {
    setX((event.clientX / window.innerWidth) * 100)
    setY((event.clientY / window.innerHeight) * 100)
  }

  window.addEventListener('pointermove', movePointer)

  const ctx = gsap.context(() => {
    const intro = gsap.timeline({ defaults: { ease: 'power4.out' } })

    gsap.set('.intro-line', { y: 72, opacity: 0, clipPath: 'inset(0 0 100% 0)' })
    gsap.set('.intro-fade', { y: 36, opacity: 0 })
    gsap.set('.machine-slice', { scaleY: 0, transformOrigin: 'bottom' })

    intro
      .to('.machine-slice', { scaleY: 1, stagger: 0.035, duration: 0.82 })
      .to('.intro-line', { y: 0, opacity: 1, clipPath: 'inset(0 0 0% 0)', stagger: 0.09, duration: 1.05 }, '-=0.42')
      .to('.intro-fade', { y: 0, opacity: 1, stagger: 0.08, duration: 0.8 }, '-=0.65')

    gsap.to('.scan-beam', {
      xPercent: 590,
      duration: 4.8,
      repeat: -1,
      ease: 'none'
    })

    gsap.to('.field-track', {
      x: -420,
      duration: 24,
      repeat: -1,
      ease: 'none'
    })

    gsap.to('.ticker-track', {
      xPercent: -50,
      duration: 26,
      repeat: -1,
      ease: 'none'
    })

    gsap.utils.toArray<HTMLElement>('.scroll-reveal').forEach((element) => {
      gsap.from(element, {
        y: 58,
        opacity: 0,
        duration: 0.95,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: element,
          start: 'top 84%',
          once: true
        }
      })
    })

    gsap.set('.system-stack', { autoAlpha: 0, y: 28, scale: 0.98 })
    gsap.set('.system-layer', {
      autoAlpha: 0,
      y: 26,
      scale: 0.94,
      rotateX: -8,
      transformOrigin: 'center bottom'
    })

    ScrollTrigger.create({
      trigger: '.system-stack',
      start: 'top 78%',
      once: true,
      onEnter: () => {
        const systemIntro = gsap.timeline({ defaults: { ease: 'power3.out' } })

        systemIntro
          .to('.system-stack', { autoAlpha: 1, y: 0, scale: 1, duration: 0.72 })
          .to('.system-layer', {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            rotateX: 0,
            duration: 0.78,
            stagger: {
              each: 0.075,
              from: 'center',
              grid: [2, 3]
            }
          }, '-=0.42')
      }
    })

    gsap.utils.toArray<HTMLElement>('.metric-number').forEach((element) => {
      const target = Number(element.dataset.value)

      if (Number.isNaN(target)) {
        return
      }

      const proxy = { value: 0 }

      gsap.to(proxy, {
        value: target,
        duration: 1.4,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: element,
          start: 'top 88%',
          once: true
        },
        onUpdate: () => {
          element.textContent = Math.round(proxy.value).toString()
        }
      })
    })
  }, rootEl)

  cleanupAnimations = () => {
    window.removeEventListener('pointermove', movePointer)
    ctx.revert()
  }
})

onBeforeUnmount(() => {
  cleanupAnimations?.()
})
</script>

<template>
  <div ref="root" class="site-shell">
    <NuxtRouteAnnouncer />

    <header class="site-header" aria-label="Primary navigation">
      <a class="brand-lockup" href="#top" aria-label="NextYou home">
        <span class="brand-mark">NY</span>
        <span>
          <strong>NextYou</strong>
          <small>未来由你</small>
        </span>
      </a>

      <nav class="nav-links" aria-label="Section navigation">
        <a v-for="item in navItems" :key="item.target" :href="item.target">{{ item.label }}</a>
      </nav>

      <a class="nav-action" href="#contact">启动项目</a>
    </header>

    <main id="top">
      <section class="hero-section" aria-labelledby="hero-title">
        <div class="hero-machine" aria-hidden="true">
          <div class="machine-grid" />
          <div class="scan-beam" />
          <div class="machine-core">
            <span
              v-for="segment in fieldSegments"
              :key="segment"
              class="machine-slice"
              :style="{ '--i': segment }"
            />
          </div>
          <div class="field-track">
            <span v-for="segment in fieldSegments" :key="`track-${segment}`">NY-{{ String(segment).padStart(2, '0') }}</span>
          </div>
        </div>

        <div class="hero-content">
          <p class="hero-kicker intro-line">AI industry company / Built for the next version of work</p>
          <h1 id="hero-title" class="hero-title intro-line">NextYou</h1>
          <p class="hero-future intro-line">未来由你</p>
          <p class="hero-copy intro-fade">
            我们为企业搭建以人为中心的 AI 操作系统，让智能体、知识、流程和决策在同一张工作界面里协同生长。
          </p>

          <div class="hero-actions intro-fade">
            <a class="button-primary" href="#contact">预约未来工作坊 <span>></span></a>
            <a class="button-ghost" href="#system">查看系统蓝图</a>
          </div>
        </div>

        <aside class="hero-console intro-fade" aria-label="NextYou operating signals">
          <p>Operating Signal</p>
          <div class="console-row">
            <span>Human intent</span>
            <strong>active</strong>
          </div>
          <div class="console-row">
            <span>Agent network</span>
            <strong>synced</strong>
          </div>
          <div class="console-row">
            <span>Enterprise memory</span>
            <strong>online</strong>
          </div>
        </aside>
      </section>

      <section class="metric-strip" aria-label="Company metrics">
        <div class="metric-card-shell">
          <article v-for="(metric, index) in metrics" :key="metric.label" class="metric-card scroll-reveal">
            <span class="metric-card-kicker">Brand signal {{ String(index + 1).padStart(2, '0') }}</span>
            <strong class="metric-value">
              <span class="metric-number" :data-value="metric.value">{{ metric.value }}</span>
              <span class="metric-suffix">{{ metric.suffix }}</span>
            </strong>
            <span class="metric-label">{{ metric.label }}</span>
          </article>
        </div>
      </section>

      <section id="method" class="statement-section" aria-label="Method">
        <div class="method-rail scroll-reveal">
          <div class="section-index">01 / Method</div>
          <div class="method-rail-card">
            <span>Method thesis</span>
            <strong>Human-led AI</strong>
            <p>从单点工具，转向可被组织吸收、追溯和复利的智能系统。</p>
          </div>
        </div>

        <div class="method-body">
          <div class="method-grid" aria-label="NextYou method pillars">
            <article class="method-card scroll-reveal">
              <span>Boundary</span>
              <h3>责任边界</h3>
              <p>定义人、智能体和系统各自负责什么，让每一次自动化都有可解释、可追溯、可回退的边界。</p>
            </article>

            <article class="method-card scroll-reveal">
              <span>Decision</span>
              <h3>判断路径</h3>
              <p>把分散在会议、文档和系统里的信号收束到同一条链路，缩短从问题到行动的距离。</p>
            </article>

            <article class="method-card scroll-reveal">
              <span>Creation</span>
              <h3>团队创造力</h3>
              <p>让 AI 承担重复整理、生成和校验，把团队注意力释放给判断、设计和创新。</p>
            </article>
          </div>

          <div class="method-contrast scroll-reveal">
            <div>
              <span>Not this</span>
              <p>采购一个更会生成内容的工具</p>
            </div>
            <div>
              <span>Build this</span>
              <p>搭建一套能连接知识、流程、权限和决策的组织神经系统</p>
            </div>
          </div>

          <div class="method-flow scroll-reveal" aria-label="Method flow">
            <span>Signal</span>
            <span>Boundary</span>
            <span>Decision</span>
            <span>Creation</span>
          </div>
        </div>
      </section>

      <section id="capability" class="capability-section">
        <div class="section-heading scroll-reveal">
          <span>02 / Capability</span>
          <h2>把 AI 放进公司的真实肌理</h2>
        </div>

        <div class="capability-grid">
          <article v-for="panel in capabilityPanels" :key="panel.code" class="capability-panel scroll-reveal">
            <span>{{ panel.code }}</span>
            <h3>{{ panel.title }}</h3>
            <p>{{ panel.text }}</p>
          </article>
        </div>
      </section>

      <section id="system" class="system-section">
        <div class="system-copy scroll-reveal">
          <span>03 / System</span>
          <h2>Decision OS</h2>
          <p>
            从权限到知识，从智能体编排到人类复核，系统的每一层都为企业级可靠性服务。
          </p>
        </div>

        <div class="system-stack" aria-label="Decision OS layers">
          <div v-for="(layer, index) in systemLayers" :key="layer" class="system-layer">
            <span>{{ String(index + 1).padStart(2, '0') }}</span>
            <strong>{{ layer }}</strong>
          </div>
        </div>
      </section>

      <section class="ticker-section" aria-label="NextYou focus areas">
        <div class="ticker-track">
          <span v-for="(item, index) in tickerLoop" :key="`${item}-${index}`">{{ item }}</span>
        </div>
      </section>

      <section id="proof" class="proof-section">
        <div class="section-heading scroll-reveal">
          <span>04 / Proof</span>
          <h2>先从一道真实裂缝开始</h2>
        </div>

        <div class="proof-grid">
          <article v-for="(item, index) in proofItems" :key="item.label" class="proof-slice scroll-reveal">
            <span class="proof-index">{{ String(index + 1).padStart(2, '0') }}</span>
            <div>
              <strong>{{ item.label }}</strong>
              <em>{{ item.signal }}</em>
            </div>
            <p>{{ item.value }}</p>
          </article>
        </div>
      </section>

      <section class="process-section">
        <div class="section-heading scroll-reveal">
          <span>05 / Process</span>
          <h2>小闭环启动，系统化扩张</h2>
        </div>

        <div class="process-line">
          <article v-for="item in steps" :key="item.step" class="process-step scroll-reveal">
            <span>{{ item.step }}</span>
            <h3>{{ item.title }}</h3>
            <p>{{ item.text }}</p>
          </article>
        </div>
      </section>

      <section id="contact" class="contact-section">
        <div class="contact-panel scroll-reveal">
          <span>Next brief</span>
          <h2>未来由你，也由今天的第一个场景开始。</h2>
          <a class="contact-link">hello@nextyou.cn</a>
        </div>
      </section>
    </main>

    <footer class="site-footer" aria-label="Site footer">
      <p>Copyright © 2026 NextYou</p>
      <a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener noreferrer">沪ICP备2024070610号-4</a>
    </footer>
  </div>
</template>
