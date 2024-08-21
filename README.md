# Advanced React Design System, Design Patterns, Performance

## React Design Patterns

- *Effective* solutions to common challenges.
- React deisgn patterns are *different* from Gang ones.
- Best practices for handling *form state*.
- *Functional* programming intead of OOP.

### Layout Components

Components that organize other components within a web page, decoupling components logic from their placement. 

- Split screens
- Lists
- Modals

```tsx
<LayoutComponent styles={...}>
    <SideNavBar />
</LayoutComponent>
```