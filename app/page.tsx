/* oxlint-disable next/no-img-element jsx-a11y/prefer-tag-over-role -- Static-exported paper figures keep their authored pixel dimensions; the efficiency grid includes explicit table roles. */
import { ArrowDown, ExternalLink, FileText } from 'lucide-react';

const highlights = [
  { value: '78M', label: 'total parameters', note: '46.4× fewer than π₀.₅' },
  { value: '96.4%', label: 'LIBERO success', note: 'within 0.5 pt of Teacher' },
  { value: '89.8%', label: 'real-world success', note: '8 physical tasks' },
  { value: '10.2×', label: 'lower decision latency', note: 'matched FP32 on H20' },
];

const contributions = [
  {
    id: '01',
    title: 'Deployment-specific distillation',
    body: 'Representation and action distillation transfer foundation knowledge into a stochastic Student, then on-policy correction teaches it at the states it actually visits.',
  },
  {
    id: '02',
    title: 'Future-aware action evaluation',
    body: 'A dual-view latent world model predicts agent- and wrist-view outcomes before execution, grounding both local contact and global scene context.',
  },
  {
    id: '03',
    title: 'Selective reasoning',
    body: 'Short-horizon semantic progress and long-horizon continuation value are evaluated only when the nominal action is predicted to be risky.',
  },
  {
    id: '04',
    title: 'Benefit-aware intervention',
    body: 'A rescue-harm-aware gate replaces the nominal proposal only when an alternative is expected to rescue failure without disrupting likely success.',
  },
];

const realWorldVideos = [
  {
    src: '/media/videos/real-01-red-block-bowl.mp4',
    poster: '/media/posters/real-01-red-block-bowl.jpg',
    title: 'Red block → red bowl',
    meta: 'Single-arm · Task 1',
  },
  {
    src: '/media/videos/real-02-red-block-ring.mp4',
    poster: '/media/posters/real-02-red-block-ring.jpg',
    title: 'Red block → target circle',
    meta: 'Single-arm · Task 2',
  },
  {
    src: '/media/videos/real-03-yellow-block-drawer.mp4',
    poster: '/media/posters/real-03-yellow-block-drawer.jpg',
    title: 'Yellow block → drawer',
    meta: 'Bimanual · Task 5',
  },
  {
    src: '/media/videos/real-04-red-blue-stack.mp4',
    poster: '/media/posters/real-04-red-blue-stack.jpg',
    title: 'Red block → blue block',
    meta: 'Single-arm · Task 3',
  },
  {
    src: '/media/videos/real-05-bowl-handover.mp4',
    poster: '/media/posters/real-05-bowl-handover.jpg',
    title: 'Green bowl handover',
    meta: 'Bimanual · Task 6',
  },
  {
    src: '/media/videos/real-06-blue-green-stack.mp4',
    poster: '/media/posters/real-06-blue-green-stack.jpg',
    title: 'Blue bowl → green bowl',
    meta: 'Bimanual · Task 8',
  },
];

const calvinTrials = ['0002', '0005', '0006', '0011', '0013', '0019', '0020', '0026', '0027', '0031'];

const liberoTasks = [
  'Alphabet soup + tomato sauce → basket',
  'Cream cheese + butter → basket',
  'Turn on stove + place moka pot',
  'Black bowl → bottom drawer + close',
  'Two mugs → matching plates',
  'Book → caddy compartment',
  'White mug + pudding → plates',
  'Alphabet soup + cream cheese → basket',
  'Moka pot → stove',
  'Yellow-white mug → microwave + close',
];

const efficiencyRows = [
  { metric: 'Inference-time parameters', teacher: '3.617B', ours: '0.078B', gain: '46.4× fewer' },
  { metric: 'Peak GPU memory', teacher: '18.11 GiB', ours: '0.26 GiB', gain: '69.7× lower' },
  { metric: 'Decision latency', teacher: '317.01 ms', ours: '31.21 ms', gain: '10.2× lower' },
  { metric: 'Energy / request', teacher: '63.40 J', ours: '3.06 J', gain: '20.7× lower' },
];

const benchmarkCards = [
  { value: '96.4%', label: 'LIBERO', detail: 'Spatial 98.4 · Object 99.2 · Goal 94.6 · Long 93.2' },
  { value: '4.10', label: 'CALVIN avg. length', detail: '62.3% complete all five consecutive tasks' },
  { value: '87.5%', label: 'SimplerEnv', detail: 'WidowX tasks, 79.2–95.8% task success' },
  { value: '89.8%', label: 'Physical robots', detail: '91.3% single-arm · 88.3% bimanual' },
];

function VideoCard({
  src,
  poster,
  title,
  meta,
  featured = false,
}: {
  src: string;
  poster: string;
  title: string;
  meta: string;
  featured?: boolean;
}) {
  return (
    <article className={`video-card${featured ? ' video-card-featured' : ''}`}>
      <video
        controls={!featured}
        autoPlay={featured}
        muted
        loop={featured}
        playsInline
        preload={featured ? 'metadata' : 'none'}
        poster={poster}
        aria-label={title}
      >
        <source src={src} type="video/mp4" />
      </video>
      <div className="video-card-copy">
        <div>
          <strong>{title}</strong>
          <span>{meta}</span>
        </div>
        <span className="success-pill"><i /> SUCCESS</span>
      </div>
    </article>
  );
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="PicoVISTA home">
          <span className="brand-mark" aria-hidden="true">P</span>
          <span>PicoVISTA</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#overview">Method</a>
          <a href="#real-world">Demos</a>
          <a href="#benchmarks">Results</a>
          <a href="#citation">Citation</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span /> On-device robot intelligence</p>
          <h1>
            Small policy.
            <br />
            <em>Selective reasoning.</em>
          </h1>
          <p className="dek">
            Robust robot manipulation without paying the full foundation-model
            cost at every control step.
          </p>
          <p className="venue">Anonymous submission · ACM MobiCom 2027</p>
          <p className="review-note">Author identities are withheld for double-blind review.</p>
          <div className="action-row">
            <a className="button button-primary" href="/paper.pdf" target="_blank" rel="noreferrer">
              <FileText size={17} /> Paper <ExternalLink size={14} />
            </a>
            <span className="button button-muted" aria-disabled="true" title="Code will be released after review">
              <span aria-hidden="true">&lt;/&gt;</span> Code after review
            </span>
          </div>
        </div>

        <div className="hero-media">
          <div className="video-frame">
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster="/media/posters/real-01-red-block-bowl.jpg"
              aria-label="PicoVISTA places a red block into a red bowl"
            >
              <source src="/media/videos/real-01-red-block-bowl.mp4" type="video/mp4" />
            </video>
            <div className="video-meta">
              <span><i /> LIVE ON DEVICE</span>
              <span>SO-ARM101 · RUBIK PI 3</span>
            </div>
          </div>
          <p className="media-caption">A compact policy handles routine control; extra candidates are evaluated only when risk rises.</p>
        </div>
        <a className="scroll-cue" href="#results" aria-label="Scroll to results">
          <ArrowDown size={18} /> See the numbers
        </a>
      </section>

      <section className="metric-band" id="results" aria-label="Key results">
        {highlights.map((item) => (
          <div className="metric" key={item.label}>
            <strong>{item.value}</strong>
            <span>{item.label}</span>
            <small>{item.note}</small>
          </div>
        ))}
      </section>

      <section className="section split" id="abstract">
        <div>
          <p className="section-index">01 — Abstract</p>
          <h2>Distill for routine control.<br />Reason on demand.</h2>
        </div>
        <div className="abstract-block">
          <p>
            Foundation vision-language-action models offer general-purpose robotic
            control but incur prohibitive latency, memory, and energy costs on edge
            devices. Yet fixed deployments typically involve narrow, repetitive
            workloads, creating a generality-deployment mismatch.
          </p>
          <p>
            PicoVISTA distills a foundation VLA into a compact stochastic Student
            through representation and action distillation, on-policy correction,
            and world-model-based consequence alignment. At runtime, additional
            candidates are evaluated only when the nominal action is deemed risky.
            A dual-view latent world model predicts outcomes, semantic and
            continuation-value models estimate short- and long-term success, and a
            rescue-harm-aware gate intervenes only when the change is expected to be
            beneficial and safe.
          </p>
        </div>
      </section>

      <section className="section" id="overview">
        <div className="section-heading">
          <div>
            <p className="section-index">02 — System overview</p>
            <h2>One fast path.<br />One careful branch.</h2>
          </div>
          <p>Nominal actions move directly to the robot when continuation value is high. Risky decisions open a counterfactual branch that predicts, scores, and safely selects alternatives.</p>
        </div>
        <figure className="paper-figure">
          <img src="/media/figures/pipeline.png" alt="PicoVISTA nominal control and risk-triggered evaluation pipeline" />
          <figcaption>Figure 4. Nominal control above; additional evaluation is triggered only for risky decisions.</figcaption>
        </figure>
      </section>

      <section className="section contributions-section">
        <p className="section-index">03 — What changes</p>
        <div className="contribution-grid">
          {contributions.map((item) => (
            <article className="contribution-card" key={item.id}>
              <span>{item.id}</span>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section method-deep-dive">
        <div className="section-heading">
          <div>
            <p className="section-index">04 — Student policy</p>
            <h2>Foundation knowledge,<br />compressed in three stages.</h2>
          </div>
          <ol className="stage-list">
            <li><b>Stage 1</b> aligns visual-language representations.</li>
            <li><b>Stage 2</b> distills action flow and gripper behavior.</li>
            <li><b>Stage 3</b> corrects Student-induced states and aligns future consequences.</li>
          </ol>
        </div>
        <figure className="paper-figure">
          <img src="/media/figures/distillation.png" alt="Three-stage student policy distillation framework" loading="lazy" />
          <figcaption>Figure 6. Representation distillation, action distillation, and world-model-guided on-policy refinement.</figcaption>
        </figure>
      </section>

      <section className="section reasoning-section">
        <div className="reasoning-copy">
          <p className="section-index">05 — Reasoning on demand</p>
          <h2>Predict first.<br />Intervene carefully.</h2>
          <p>A dual-view latent world model forecasts short-horizon consequences from complementary agent and wrist views. Each candidate then receives two distinct signals:</p>
          <div className="signal-pair">
            <div><span>Short horizon</span><strong>Task-semantic progress</strong><p>Did the action advance task-grounded predicates such as proximity, grasp state, spatial relation, or completion?</p></div>
            <div><span>Long horizon</span><strong>Continuation value</strong><p>After this action prefix, what is the probability that returning control to the Student eventually succeeds?</p></div>
          </div>
          <p className="gate-note">The gate ranks rescue potential, harm risk, and expected gain. If no alternative clears every threshold, PicoVISTA abstains.</p>
        </div>
        <figure className="model-card">
          <img src="/media/figures/dual-view-world-model.png" alt="Dual-view latent world model" loading="lazy" />
          <figcaption>Agent view for global context. Wrist view for local contact.</figcaption>
        </figure>
      </section>

      <section className="full-bleed demos-section" id="real-world">
        <div className="section demos-inner">
          <div className="section-heading">
            <div>
              <p className="section-index">06 — Physical robot demos</p>
              <h2>From latent futures<br />to real motion.</h2>
            </div>
            <p>Single- and bimanual SO-ARM101 platforms run PicoVISTA locally on a Rubik Pi 3. Select a clip to inspect the complete successful rollout.</p>
          </div>
          <div className="video-gallery real-world-gallery">
            {realWorldVideos.map((video, index) => (
              <VideoCard key={video.src} {...video} featured={index === 0} />
            ))}
          </div>
          <figure className="platform-strip">
            <img src="/media/figures/real-world-platform.png" alt="Dual-arm platform and task execution sequences" loading="lazy" />
            <figcaption>Dual-arm platform with overhead and wrist-mounted cameras; Rubik Pi 3 performs all neural inference on device.</figcaption>
          </figure>
        </div>
      </section>

      <section className="section" id="simulation">
        <div className="section-heading">
          <div>
            <p className="section-index">07 — Simulation rollouts</p>
            <h2>Twenty successful<br />Student rollouts.</h2>
          </div>
          <p>Ten CALVIN chains each complete five consecutive instructions. Ten LIBERO examples span spatial, object, goal, and long-horizon manipulation.</p>
        </div>

        <div className="simulation-group">
          <div className="group-header"><h3>CALVIN · 5/5 chains</h3><span>10 rollouts</span></div>
          <div className="video-gallery simulation-gallery">
            {calvinTrials.map((trial, index) => (
              <VideoCard
                key={trial}
                src={`/media/videos/calvin/calvin_trial${trial}_success5of5.mp4`}
                poster={`/media/posters/calvin/${String(index + 7).padStart(2, '0')}-calvin_trial${trial}_success5of5-3.jpg`}
                title={`Five-task chain · Trial ${trial}`}
                meta="CALVIN ABC→D · Student success 5/5"
              />
            ))}
          </div>
        </div>

        <div className="simulation-group">
          <div className="group-header"><h3>LIBERO · task rollouts</h3><span>10 rollouts</span></div>
          <div className="video-gallery simulation-gallery">
            {liberoTasks.map((task, index) => {
              const taskId = String(index).padStart(2, '0');
              const initId = index === 3 ? '01' : '00';
              return (
                <VideoCard
                  key={task}
                  src={`/media/videos/libero/libero_task${taskId}_init${initId}_success.mp4`}
                  poster={`/media/posters/libero/${String(index + 17).padStart(2, '0')}-libero_task${taskId}_init${initId}_success-3.jpg`}
                  title={task}
                  meta={`LIBERO-10 · Task ${taskId}`}
                />
              );
            })}
          </div>
        </div>
      </section>

      <section className="section benchmarks-section" id="benchmarks">
        <div className="section-heading">
          <div>
            <p className="section-index">08 — Benchmark performance</p>
            <h2>Tiny footprint.<br />Near-teacher control.</h2>
          </div>
          <p>PicoVISTA keeps the deployment footprint below 0.1B parameters while remaining competitive across three simulation suites and eight physical tasks.</p>
        </div>
        <div className="benchmark-grid">
          {benchmarkCards.map((item) => (
            <article className="benchmark-card" key={item.label}>
              <strong>{item.value}</strong>
              <h3>{item.label}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
        <div className="suite-bars" aria-label="LIBERO suite success rates">
          {[
            ['Spatial', 98.4],
            ['Object', 99.2],
            ['Goal', 94.6],
            ['Long', 93.2],
          ].map(([label, value]) => (
            <div className="suite-row" key={label as string}>
              <span>{label}</span>
              <div><i style={{ width: `${value}%` }} /></div>
              <strong>{value}%</strong>
            </div>
          ))}
        </div>
      </section>

      <section className="section efficiency-section">
        <div className="section-heading">
          <div>
            <p className="section-index">09 — Efficiency</p>
            <h2>Less model.<br />Less waiting. Less energy.</h2>
          </div>
          <p>Matched FP32 profiling on one NVIDIA H20 isolates model-side cost. On edge devices, the complete candidate-evaluation path still remains faster and smaller than VLA-Adapter baselines.</p>
        </div>
        <div className="efficiency-table" role="table" aria-label="PicoVISTA efficiency versus pi zero point five teacher">
          <div className="efficiency-row efficiency-head" role="row">
            <span>Metric</span><span>π₀.₅ Teacher</span><span>PicoVISTA</span><span>Reduction</span>
          </div>
          {efficiencyRows.map((row) => (
            <div className="efficiency-row" role="row" key={row.metric}>
              <span>{row.metric}</span><span>{row.teacher}</span><strong>{row.ours}</strong><em>{row.gain}</em>
            </div>
          ))}
        </div>
        <div className="figure-pair">
          <figure className="paper-figure compact-figure">
            <img src="/media/figures/edge-latency-memory.png" alt="On-device inference latency and peak memory across five edge platforms" loading="lazy" />
            <figcaption>Per-decision cost across five edge platforms.</figcaption>
          </figure>
          <figure className="paper-figure compact-figure">
            <img src="/media/figures/task-resource-cost.png" alt="Memory, latency, and energy across eight real-world tasks" loading="lazy" />
            <figcaption>Task-level resource cost on Rubik Pi 3.</figcaption>
          </figure>
        </div>
      </section>

      <section className="full-bleed intervention-section">
        <div className="section intervention-inner">
          <div className="intervention-copy">
            <p className="section-index">10 — Why selective matters</p>
            <h2>Same success.<br />76.7% less inference time.</h2>
            <p>Selective triggering reaches the same 96.4% LIBERO success as evaluating eight candidates at every decision, while cutting cumulative neural inference from 45.61s to 10.65s.</p>
            <div className="intervention-stats">
              <div><strong>+6.3 pt</strong><span>over Student only</span></div>
              <div><strong>K = 8</strong><span>best trade-off</span></div>
              <div><strong>&lt;268 MB</strong><span>peak across 8 real tasks</span></div>
            </div>
          </div>
          <figure className="model-card light-card">
            <img src="/media/figures/risk-trigger-ablation.png" alt="Candidate budget and risk trigger effectiveness" loading="lazy" />
            <figcaption>Candidate-budget trade-off and selective-trigger effectiveness.</figcaption>
          </figure>
        </div>
      </section>

      <section className="section hardware-section">
        <div>
          <p className="section-index">11 — Edge deployment</p>
          <h2>Entirely on a<br />$179 Rubik Pi 3.</h2>
          <p>No cloud inference is needed for candidate generation, dual-view future prediction, semantic and value estimation, gate selection, or receding-horizon control.</p>
        </div>
        <div className="hardware-specs">
          <div><span>SoC</span><strong>Qualcomm QCS6490</strong></div>
          <div><span>NPU</span><strong>Hexagon 770 · 12 TOPS</strong></div>
          <div><span>Memory</span><strong>8 GB LPDDR4x</strong></div>
          <div><span>Runtime</span><strong>Qualcomm AI Engine Direct</strong></div>
        </div>
      </section>

      <section className="section citation-section" id="citation">
        <div>
          <p className="section-index">12 — Citation</p>
          <h2>Cite PicoVISTA.</h2>
          <p>The current manuscript is anonymized for double-blind review. Author information and publication metadata will be updated after the review process.</p>
        </div>
        <pre><code>{`@article{anonymous2027picovista,
  title   = {PicoVISTA: Small Policy, Selective Reasoning
             for Robust On-Device Robot Manipulation},
  author  = {Anonymous},
  journal = {Under double-blind review},
  year    = {2027}
}`}</code></pre>
      </section>

      <footer>
        <a className="brand" href="#top"><span className="brand-mark" aria-hidden="true">P</span><span>PicoVISTA</span></a>
        <p>Small policy, selective reasoning for robust on-device robot manipulation.</p>
        <a href="/paper.pdf" target="_blank" rel="noreferrer">Read the paper <ExternalLink size={13} /></a>
      </footer>
    </main>
  );
}
