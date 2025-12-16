import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'portfolio-root',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="widget">
      <header>
        <p class="kicker">Angular Insight</p>
        <h2>Interactive Delivery Snapshot</h2>
        <p class="lead">
          Quick readout of the unique strengths I bring after three years shipping customer-facing UIs.
        </p>
      </header>

      <nav class="view-toggle" role="tablist" aria-label="Experience lenses">
        <button
          *ngFor="let view of views"
          type="button"
          (click)="selectView(view.id)"
          [class.active]="view.id === selectedView()"
          role="tab"
          [attr.aria-selected]="view.id === selectedView()"
        >
          {{ view.label }}
        </button>
      </nav>

      <section *ngIf="selectedView() === 'impact'" role="tabpanel">
        <article *ngFor="let highlight of impactHighlights; trackBy: trackByTitle" class="card">
          <div class="card-header">
            <h3>{{ highlight.title }}</h3>
            <span class="metric">{{ highlight.metric }}</span>
          </div>
          <p>{{ highlight.description }}</p>
          <footer>
            <span *ngFor="let tag of highlight.tags; trackBy: trackByTag" class="tag">{{ tag }}</span>
          </footer>
        </article>
      </section>

      <section *ngIf="selectedView() === 'skills'" role="tabpanel">
        <div *ngFor="let cluster of skillClusters; trackBy: trackByTitle" class="cluster">
          <div class="cluster-header">
            <h3>{{ cluster.title }}</h3>
            <span class="focus">{{ cluster.focus }}</span>
          </div>
          <p>{{ cluster.description }}</p>
          <ul>
            <li *ngFor="let item of cluster.items; trackBy: trackByTitle">
              <span>{{ item.name }}</span>
              <div class="bar">
                <span class="bar-fill" [style.width.%]="item.depth * 100"></span>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <section *ngIf="selectedView() === 'process'" role="tabpanel">
        <ol class="timeline">
          <li *ngFor="let step of processSteps; trackBy: trackByTitle">
            <div class="timeframe">{{ step.timeframe }}</div>
            <div class="details">
              <h3>{{ step.title }}</h3>
              <p>{{ step.description }}</p>
              <ul>
                <li *ngFor="let outcome of step.outcomes; trackBy: trackByString">{{ outcome }}</li>
              </ul>
            </div>
          </li>
        </ol>
      </section>

      <footer class="cta">
        <p>Ready to collaborate on polished, maintainable interfaces that ship on time.</p>
        <a class="cta-button" href="mailto:hello@uxsprint.dev">Book a pairing session</a>
      </footer>
    </div>
  `,
  styles: [`
    :host {
      display: block;
      max-width: 640px;
      color: #0e1726;
      font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    }

    .widget {
      background: linear-gradient(160deg, #ffffff 0%, #f5f8ff 35%, #eef5ff 100%);
      border-radius: 20px;
      padding: 2.5rem;
      box-shadow: 0 35px 60px -30px rgba(16, 37, 92, 0.35);
      border: 1px solid rgba(99, 125, 255, 0.15);
    }

    header {
      display: grid;
      gap: 0.75rem;
    }

    .kicker {
      text-transform: uppercase;
      letter-spacing: 0.14em;
      font-weight: 600;
      color: #4f46e5;
      font-size: 0.75rem;
    }

    h2 {
      margin: 0;
      font-size: 2rem;
      letter-spacing: -0.02em;
    }

    .lead {
      margin: 0;
      color: #4a5568;
      line-height: 1.5;
    }

    .view-toggle {
      display: flex;
      gap: 0.5rem;
      margin: 2rem 0 1.5rem;
      background: rgba(79, 70, 229, 0.05);
      padding: 0.4rem;
      border-radius: 999px;
    }

    .view-toggle button {
      flex: 1;
      border: none;
      background: transparent;
      border-radius: 999px;
      padding: 0.55rem 1rem;
      font-weight: 600;
      color: #4f46e5;
      cursor: pointer;
      transition: background 0.2s ease, box-shadow 0.2s ease, color 0.2s ease;
    }

    .view-toggle button.active {
      background: linear-gradient(145deg, #4f46e5, #312e81);
      color: #fff;
      box-shadow: 0 12px 25px -15px rgba(79, 70, 229, 0.8);
    }

    section {
      display: grid;
      gap: 1.25rem;
    }

    .card {
      background: rgba(255, 255, 255, 0.9);
      border-radius: 16px;
      padding: 1.4rem;
      border: 1px solid rgba(99, 125, 255, 0.12);
      display: grid;
      gap: 0.8rem;
    }

    .card-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 1rem;
    }

    .card-header h3 {
      margin: 0;
      font-size: 1.1rem;
    }

    .metric {
      font-size: 0.85rem;
      font-weight: 600;
      color: #2563eb;
      background: rgba(37, 99, 235, 0.12);
      padding: 0.35rem 0.75rem;
      border-radius: 999px;
    }

    .card p {
      margin: 0;
      color: #404968;
      line-height: 1.45;
    }

    .tag {
      display: inline-flex;
      align-items: center;
      color: #1e293b;
      font-size: 0.75rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      background: rgba(15, 23, 42, 0.06);
      padding: 0.35rem 0.65rem;
      border-radius: 999px;
      margin-right: 0.4rem;
    }

    .cluster {
      background: rgba(15, 23, 42, 0.04);
      border-radius: 16px;
      padding: 1.4rem;
      border: 1px solid rgba(148, 163, 184, 0.18);
      display: grid;
      gap: 0.8rem;
    }

    .cluster-header {
      display: flex;
      align-items: baseline;
      justify-content: space-between;
      gap: 1rem;
    }

    .cluster-header h3 {
      margin: 0;
      font-size: 1.05rem;
    }

    .focus {
      font-size: 0.8rem;
      color: #6366f1;
      font-weight: 600;
    }

    .cluster ul {
      list-style: none;
      padding: 0;
      margin: 0;
      display: grid;
      gap: 0.75rem;
    }

    .cluster li {
      display: grid;
      gap: 0.5rem;
    }

    .cluster li span {
      font-size: 0.93rem;
      font-weight: 600;
      color: #1f2937;
    }

    .bar {
      height: 8px;
      background: rgba(99, 102, 241, 0.15);
      border-radius: 999px;
      overflow: hidden;
    }

    .bar-fill {
      display: block;
      height: 100%;
      border-radius: inherit;
      background: linear-gradient(120deg, #312e81, #6366f1);
      transition: width 0.6s ease;
    }

    .timeline {
      list-style: none;
      padding: 0;
      margin: 0;
      display: grid;
      gap: 1.25rem;
    }

    .timeline li {
      display: grid;
      gap: 0.6rem;
      padding-left: 1.5rem;
      border-left: 2px solid rgba(79, 70, 229, 0.4);
      position: relative;
    }

    .timeline li::before {
      content: '';
      position: absolute;
      top: 0.35rem;
      left: -0.6rem;
      width: 0.75rem;
      height: 0.75rem;
      border-radius: 999px;
      background: #4f46e5;
      box-shadow: 0 0 0 6px rgba(79, 70, 229, 0.18);
    }

    .timeline .timeframe {
      font-size: 0.85rem;
      font-weight: 600;
      color: #4338ca;
      text-transform: uppercase;
      letter-spacing: 0.06em;
    }

    .timeline h3 {
      margin: 0;
      font-size: 1rem;
    }

    .timeline p {
      margin: 0;
      color: #475569;
    }

    .timeline ul {
      list-style: disc;
      padding-left: 1.1rem;
      color: #1f2937;
      margin: 0;
      display: grid;
      gap: 0.35rem;
    }

    .cta {
      margin-top: 2.5rem;
      display: grid;
      gap: 1rem;
      text-align: center;
    }

    .cta p {
      margin: 0;
      color: #1f2937;
      font-weight: 600;
    }

    .cta-button {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      padding: 0.85rem 1.8rem;
      border-radius: 999px;
      background: linear-gradient(135deg, #4f46e5, #28b0ed);
      color: #fff;
      text-decoration: none;
      font-weight: 700;
      box-shadow: 0 20px 35px -28px rgba(20, 63, 160, 0.9);
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }

    .cta-button:hover {
      transform: translateY(-1px);
      box-shadow: 0 16px 30px -22px rgba(20, 63, 160, 0.9);
    }

    @media (max-width: 640px) {
      .widget {
        padding: 1.8rem;
      }

      .view-toggle {
        flex-direction: column;
      }

      .card-header {
        flex-direction: column;
        align-items: flex-start;
      }
    }
  `],
})
export class AppComponent {
  protected readonly views = [
    { id: 'impact', label: 'Impact' },
    { id: 'skills', label: 'Skills' },
    { id: 'process', label: 'Process' },
  ] as const;

  protected readonly selectedView = signal<(typeof this.views)[number]['id']>('impact');

  protected readonly impactHighlights = [
    {
      title: 'Design System Landing',
      metric: '22% faster feature delivery',
      description:
        'Rolled out a modular React + Tailwind design system and CI storybook pipeline that cut UI review cycles in half.',
      tags: ['React', 'Storybook', 'CI/CD'],
    },
    {
      title: 'Insight Dashboard Modernization',
      metric: '94% Lighthouse accessibility',
      description:
        'Rebuilt legacy AngularJS modules with modern Angular standalone components, pushing Core Web Vitals into the green.',
      tags: ['Angular', 'Core Web Vitals', 'a11y'],
    },
    {
      title: 'Feature Flag Experimentation',
      metric: '+18% onboarding completion',
      description:
        'Partnered with product to ship experimentation-ready interfaces leveraging LaunchDarkly and React Server Components.',
      tags: ['React', 'Experimentation', 'DX'],
    },
  ];

  protected readonly skillClusters = [
    {
      title: 'Product Delivery',
      focus: 'Outcome-first collaboration',
      description:
        'Translate research and product briefs into interfaces that validate quickly and iterate smoothly.',
      items: [
        { name: 'Rapid prototyping with Next.js & Tailwind', depth: 0.92 },
        { name: 'User journey mapping & UX writing', depth: 0.75 },
        { name: 'Experiment design with analytics hooks', depth: 0.7 },
      ],
    },
    {
      title: 'Engineering Craft',
      focus: 'Stable, scalable frontends',
      description:
        'Balance developer experience with long-term maintainability across React and Angular stacks.',
      items: [
        { name: 'React Server Components & hydration strategy', depth: 0.88 },
        { name: 'Angular standalone APIs & signals', depth: 0.8 },
        { name: 'Type-safe API integration & testing', depth: 0.82 },
      ],
    },
    {
      title: 'Quality & Workflow',
      focus: 'Performance + accessibility',
      description:
        'Embed quality gates across the pipeline so production releases stay healthy and observable.',
      items: [
        { name: 'Automated accessibility testing (axe, Pa11y)', depth: 0.85 },
        { name: 'Performance budgeting with Web Vitals', depth: 0.78 },
        { name: 'Observability dashboards & alerting', depth: 0.68 },
      ],
    },
  ];

  protected readonly processSteps = [
    {
      title: 'Discovery & Alignment',
      timeframe: 'Week 1',
      description: 'Synthesize requirements, confirm success metrics, map stakeholder expectations.',
      outcomes: [
        'Co-create user stories and edge case coverage matrix.',
        'Document technical constraints and data readiness.',
        'Align on KPI dashboard ownership.',
      ],
    },
    {
      title: 'Prototype & Validate',
      timeframe: 'Weeks 2-3',
      description: 'Build iterative prototypes in React and Angular to stress-test integration points.',
      outcomes: [
        'Ship incremental UI slices behind feature flags.',
        'Run async design critiques with Storybook snapshots.',
        'Validate accessibility with screen reader testing.',
      ],
    },
    {
      title: 'Scale & Optimize',
      timeframe: 'Weeks 4+',
      description: 'Harden implementation, create playbooks, and ensure performance holds in production.',
      outcomes: [
        'Codify shared components with documentation.',
        'Automate regression testing and bundle monitoring.',
        'Enable observability hooks for experiment readouts.',
      ],
    },
  ];

  protected selectView(view: (typeof this.views)[number]['id']): void {
    this.selectedView.set(view);
  }

  protected trackByTitle = (_: number, item: { title?: string; name?: string; timeframe?: string }) =>
    item.title ?? item.name ?? item.timeframe ?? _;

  protected trackByTag = (_: number, tag: string) => `${tag}-${_}`;

  protected trackByString = (_: number, value: string) => value;
}
