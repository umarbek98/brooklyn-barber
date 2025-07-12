# Contributing to Brooklyn Barber Co.

We love your input! We want to make contributing to Brooklyn Barber Co. as easy and transparent as possible.

## 🤝 How to Contribute

### Reporting Bugs
- Use the bug report template when creating an issue
- Include steps to reproduce the issue
- Test with screen readers if accessibility-related
- Include browser and OS information

### Suggesting Features
- Use the feature request template
- Explain the use case and value
- Consider accessibility implications
- Provide mockups or examples if helpful

### Code Contributions

#### Prerequisites
- Node.js 18+
- Git knowledge
- Basic understanding of React and accessibility

#### Setup
1. Fork the repository
2. Clone your fork: `git clone https://github.com/YOUR_USERNAME/brooklyn-barber.git`
3. Install dependencies: `npm install`
4. Create a branch: `git checkout -b feature/your-feature`

#### Development Guidelines
- **Accessibility First**: Every component must be keyboard accessible and screen reader friendly
- **Component Naming**: Use Brooklyn* prefix for main components
- **ARIA Labels**: Include comprehensive ARIA attributes
- **Testing**: Test with keyboard navigation and screen readers
- **Code Style**: Follow existing patterns and run `npm run lint`

#### Pull Request Process
1. Update documentation if needed
2. Run tests: `npm run lint && npm run build`
3. Test accessibility with keyboard and screen reader
4. Commit with conventional format: `feat:`, `fix:`, `docs:`, etc.
5. Create PR with clear description

## 🎯 Accessibility Standards

All contributions must maintain WCAG 2.1 AA compliance:
- Semantic HTML structure
- Proper ARIA labels and roles
- Keyboard navigation support
- Screen reader compatibility
- Color contrast ratios
- Focus management

## 📝 Code Style

- Use functional components with hooks
- Include TypeScript-style JSDoc comments
- Follow existing CSS class naming conventions
- Use meaningful variable and function names
- Keep components focused and reusable

## 🐛 Bug Report Template

```markdown
**Bug Description**
A clear description of the bug.

**Steps to Reproduce**
1. Go to '...'
2. Click on '...'
3. See error

**Expected Behavior**
What you expected to happen.

**Screenshots**
If applicable, add screenshots.

**Environment**
- Browser: [e.g. Chrome 96]
- OS: [e.g. macOS 12]
- Screen Reader: [e.g. VoiceOver, NVDA]
```

## ✨ Feature Request Template

```markdown
**Feature Description**
A clear description of the feature.

**Use Case**
Why is this feature needed?

**Accessibility Considerations**
How will this work with screen readers and keyboard navigation?

**Additional Context**
Mockups, examples, or references.
```

## 📞 Questions?

Feel free to open an issue with the "question" label or reach out to the maintainers.

Thank you for contributing! 🎉
