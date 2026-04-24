# ResponsiveWrapper Component

A React Higher-Order Component (HOC) that provides responsive
component rendering based on screen size. It dynamically imports and
renders different components for mobile and desktop devices, offering
better performance through code splitting.

## Features

- **Dynamic imports**: Loads components on-demand, reducing initial
  bundle size
- **Responsive behavior**: Automatically switches components based on
  screen width
- **Customizable breakpoint**: Define your own breakpoint for
  mobile/desktop switching
- **Loading state handling**: Shows loading component while importing
- **TypeScript support**: Fully typed for better development
  experience
- **Factory function**: Convenient utility for creating responsive
  components

## Basic Usage

### Method 1: Using ResponsiveWrapper directly

```tsx
import React from "react";
import { ResponsiveWrapper } from "@/components/ResponsiveWrapper";

const MyComponent: React.FC = () => {
  return (
    <ResponsiveWrapper
      mobileImport={() => import("./MyComponent.mobile")}
      desktopImport={() => import("./MyComponent.desktop")}
      breakpoint={768}
    />
  );
};
```

### Method 2: Using the factory function

```tsx
import React from "react";
import { createResponsiveComponent } from "@/components/ResponsiveWrapper";

const MyResponsiveComponent = createResponsiveComponent(
  () => import("./MyComponent.mobile"),
  () => import("./MyComponent.desktop"),
  768
);

// Use it anywhere in your app
const App: React.FC = () => {
  return (
    <div>
      <MyResponsiveComponent />
    </div>
  );
};
```

## Props

| Prop               | Type                                             | Required | Default             | Description                                   |
| ------------------ | ------------------------------------------------ | -------- | ------------------- | --------------------------------------------- |
| `mobileImport`     | `() => Promise<{ default: ComponentType<any> }>` | Yes      | -                   | Dynamic import function for mobile component  |
| `desktopImport`    | `() => Promise<{ default: ComponentType<any> }>` | Yes      | -                   | Dynamic import function for desktop component |
| `breakpoint`       | `number`                                         | No       | `768`               | Screen width breakpoint in pixels             |
| `loadingComponent` | `React.ReactNode`                                | No       | Default loading div | Component to show while loading               |

## Advanced Usage

### Custom Loading Component

```tsx
import React from "react";
import { ResponsiveWrapper } from "@/components/ResponsiveWrapper";
import { Spinner } from "@/components/Spinner";

const MyComponent: React.FC = () => {
  return (
    <ResponsiveWrapper
      mobileImport={() => import("./MyComponent.mobile")}
      desktopImport={() => import("./MyComponent.desktop")}
      loadingComponent={<Spinner />}
    />
  );
};
```

### Different Breakpoints

```tsx
import React from "react";
import { ResponsiveWrapper } from "@/components/ResponsiveWrapper";

const MyComponent: React.FC = () => {
  return (
    <ResponsiveWrapper
      mobileImport={() => import("./MyComponent.mobile")}
      desktopImport={() => import("./MyComponent.desktop")}
      breakpoint={1024} // Switch at 1024px instead of default 768px
    />
  );
};
```

### Multiple Responsive Components

```tsx
import React from "react";
import { createResponsiveComponent } from "@/components/ResponsiveWrapper";

// Create multiple responsive components
const ResponsiveHeader = createResponsiveComponent(
  () => import("./Mobile"),
  () => import("./Desktop")
);

const ResponsiveNavigation = createResponsiveComponent(
  () => import("./Navigation.mobile"),
  () => import("./Navigation.desktop"),
  1024 // Custom breakpoint
);

const ResponsiveFooter = createResponsiveComponent(
  () => import("./Footer.mobile"),
  () => import("./Footer.desktop")
);

const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <ResponsiveHeader />
      <ResponsiveNavigation />
      <main>{children}</main>
      <ResponsiveFooter />
    </div>
  );
};
```

## Component Structure

For best practices, organize your responsive components like this:

```
components/
├── MyComponent/
│   ├── index.tsx              # Main component using ResponsiveWrapper
│   ├── MyComponent.mobile.tsx # Mobile-specific implementation
│   ├── MyComponent.desktop.tsx# Desktop-specific implementation
│   └── styles.module.scss     # Shared styles (if needed)
```

### Example Component Files

**MyComponent/index.tsx**

```tsx
import { createResponsiveComponent } from "@/components/ResponsiveWrapper";

const MyComponent = createResponsiveComponent(
  () => import("./MyComponent.mobile"),
  () => import("./MyComponent.desktop")
);

export default MyComponent;
```

**MyComponent/MyComponent.mobile.tsx**

```tsx
import React from "react";

const MyComponentMobile: React.FC = () => {
  return (
    <div className='mobile-layout'>
      <h1>Mobile Version</h1>
      {/* Mobile-specific implementation */}
    </div>
  );
};

export default MyComponentMobile;
```

**MyComponent/MyComponent.desktop.tsx**

```tsx
import React from "react";

const MyComponentDesktop: React.FC = () => {
  return (
    <div className='desktop-layout'>
      <h1>Desktop Version</h1>
      {/* Desktop-specific implementation */}
    </div>
  );
};

export default MyComponentDesktop;
```

## How It Works

1. **Device Detection**: Uses the `useDevice` hook to determine if the
   current screen size is mobile or desktop based on the breakpoint
2. **Dynamic Import**: Imports the appropriate component (mobile or
   desktop) using dynamic imports
3. **Loading State**: Shows a loading component while the target
   component is being imported
4. **Component Rendering**: Renders the imported component once it's
   loaded
5. **Responsive Updates**: Automatically switches components when the
   screen size changes

## Benefits

### Performance

- **Code Splitting**: Only loads the component needed for the current
  device
- **Reduced Bundle Size**: Mobile users don't download desktop
  components and vice versa
- **Lazy Loading**: Components are loaded only when needed

### Developer Experience

- **Clean Separation**: Keep mobile and desktop implementations
  separate
- **Reusable**: Use the same wrapper for multiple components
- **TypeScript Support**: Full type safety and IntelliSense support

### User Experience

- **Optimized UI**: Each device gets a UI specifically designed for it
- **Better Performance**: Faster loading times due to smaller bundle
  sizes
- **Smooth Transitions**: Loading states prevent layout shifts

## Real-World Example

This is how the Header component uses ResponsiveWrapper:

```tsx
"use client";

import React from "react";
import { ResponsiveWrapper } from "@/components/ResponsiveWrapper";

const ResponsiveHeader: React.FC = () => {
  return (
    <ResponsiveWrapper
      mobileImport={() => import("./Mobile")}
      desktopImport={() => import("./Desktop")}
      breakpoint={768}
      loadingComponent={
        <div
          style={{
            height: "80px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#f5f5f5",
          }}
        >
          Loading Header...
        </div>
      }
    />
  );
};

export default ResponsiveHeader;
```

## Best Practices

1. **Consistent Interface**: Ensure mobile and desktop components have
   the same props interface
2. **Loading States**: Always provide meaningful loading components
   that match your component's dimensions
3. **Error Handling**: The wrapper handles import errors gracefully,
   but ensure your components are properly exported
4. **Breakpoint Selection**: Choose breakpoints that make sense for
   your design (768px for mobile-first, 1024px for tablet
   consideration)
5. **Performance**: Use this wrapper for components with significantly
   different mobile/desktop implementations, not for simple style
   differences

## Dependencies

- `useDevice` hook for device detection
- `useResponsiveComponent` hook for component loading logic
- React 18+ for proper dynamic import support

## Browser Support

Works in all modern browsers that support dynamic imports and React
hooks. Falls back gracefully in older browsers.
