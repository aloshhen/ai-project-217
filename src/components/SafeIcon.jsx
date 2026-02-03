import React, { lazy, Suspense } from 'react';
import * as Icons from 'lucide-react';

// Convert kebab-case to PascalCase
const toPascalCase = (str) => {
  return str
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');
};

const SafeIcon = ({ name, size = 24, className = '', ...props }) => {
  try {
    const iconName = toPascalCase(name);
    const IconComponent = Icons[iconName];
    
    if (!IconComponent) {
      // Fallback to HelpCircle if icon doesn't exist
      const FallbackIcon = Icons['HelpCircle'];
      return FallbackIcon ? <FallbackIcon size={size} className={className} {...props} /> : null;
    }
    
    return <IconComponent size={size} className={className} {...props} />;
  } catch (error) {
    // Ultimate fallback
    return <span style={{ fontSize: size, color: '#FF69B4' }}>✦</span>;
  }
};

export default SafeIcon;