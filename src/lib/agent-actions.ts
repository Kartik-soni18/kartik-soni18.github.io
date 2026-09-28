export type AgentAction =
  | { action: 'scroll'; target: 'home' | 'skills' | 'projects' | 'contact' }
  | { action: 'click'; target: 'github' | 'linkedin' | 'email' }
  | { action: 'extract_contact' }
  | { action: 'extract_personal_info' }
  | { action: 'answer'; message: string };

const labels: Record<string, string> = { home: 'Home', skills: 'Skills', projects: 'Projects', contact: 'Contact', github: 'GitHub', linkedin: 'LinkedIn', email: 'email' };

export function executeAgentAction(action: AgentAction): string {
  if (action.action === 'scroll') {
    const section = document.querySelector<HTMLElement>(`[data-agent-section="${action.target}"]`);
    if (!section) return 'That section is not available on this page.';
    section.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth', block: 'start' });
    section.classList.add('agent-section-highlight');
    if (action.target === 'projects') section.classList.add('agent-project-overview');
    window.setTimeout(() => section.classList.remove('agent-section-highlight'), 1300);
    window.setTimeout(() => section.classList.remove('agent-project-overview'), 2600);
    return `Opening ${labels[action.target]}…`;
  }
  if (action.action === 'click') {
    const link = document.querySelector<HTMLAnchorElement>(`[data-agent-action="${action.target}"]`);
    if (!link) return 'That public link is not available right now.';
    link.click();
    return `Opening ${labels[action.target]}…`;
  }
  if (action.action === 'extract_contact') {
    const email = document.querySelector<HTMLElement>('[data-contact-email]')?.dataset.contactEmail;
    const linkedin = document.querySelector<HTMLElement>('[data-contact-linkedin]')?.dataset.contactLinkedin;
    return [email && `Email: ${email}`, linkedin && `LinkedIn: ${linkedin}`].filter(Boolean).join(' · ') || 'Contact details are not available.';
  }
  if (action.action === 'extract_personal_info') {
    const name = document.querySelector<HTMLElement>('[data-profile-name]')?.dataset.profileName;
    const about = document.querySelector<HTMLElement>('[data-profile-about]')?.dataset.profileAbout;
    return [name, about].filter(Boolean).join(' — ') || 'Profile information is not available.';
  }
  return action.message;
}
