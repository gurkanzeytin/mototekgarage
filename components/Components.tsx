import React from 'react';
import Link from 'next/link';

export const Section = ({ children, className = '', id = '' }: { children?: React.ReactNode; className?: string; id?: string }) => (
  <section id={id} className={`py-16 md:py-24 px-4 md:px-8 ${className}`}>
    <div className="max-w-7xl mx-auto">{children}</div>
  </section>
);

export const Button = ({
  children,
  variant = 'primary',
  className = '',
  to,
  onClick,
  type = 'button',
  fullWidth = false,
  icon: Icon,
  disabled
}: {
  children?: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  className?: string;
  to?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  fullWidth?: boolean;
  icon?: React.ElementType;
  disabled?: boolean;
}) => {
  const baseStyles = "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-200 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed";
  const variants = {
    primary: "bg-brand-accent hover:bg-brand-accentHover text-white shadow-lg shadow-brand-accent/20",
    secondary: "bg-white text-brand-surface hover:bg-gray-100",
    outline: "border-2 border-brand-accent text-brand-accent hover:bg-brand-accent/10",
    ghost: "text-gray-400 hover:text-white hover:bg-white/5"
  };

  const widthClass = fullWidth ? 'w-full' : '';
  const combinedClasses = `${baseStyles} ${variants[variant]} ${widthClass} ${className}`;

  if (to) {
    return (
      <Link href={to} className={combinedClasses} onClick={onClick}>
        {Icon && <Icon className="w-5 h-5" />}
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedClasses} disabled={disabled}>
      {Icon && <Icon className="w-5 h-5" />}
      {children}
    </button>
  );
};

export const Badge = ({ status }: { status: 'available' | 'reserved' | 'sold' }) => {
  const styles = {
    available: "bg-green-500/20 text-green-400 border-green-500/30",
    reserved: "bg-brand-warning/20 text-brand-warning border-brand-warning/30",
    sold: "bg-gray-700 text-gray-400 border-gray-600"
  };

  const labels = {
    available: 'Satılık',
    reserved: 'Rezerve',
    sold: 'Satıldı'
  };

  return (
    <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border ${styles[status]}`}>
      {labels[status]}
    </span>
  );
};

export const Input = ({ label, error, ...props }: React.InputHTMLAttributes<HTMLInputElement> & { label: string; error?: string }) => (
  <div className="flex flex-col gap-1.5">
    <label className="text-sm font-medium text-gray-300">{label}</label>
    <input
      className={`bg-brand-surface border ${error ? 'border-red-500' : 'border-gray-700'} rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-colors`}
      {...props}
    />
    {error && <span className="text-xs text-red-400">{error}</span>}
  </div>
);



export const Textarea = ({ label, error, ...props }: React.TextareaHTMLAttributes<HTMLTextAreaElement> & { label: string; error?: string }) => (
  <div className="flex flex-col gap-1.5">
    <label className="text-sm font-medium text-gray-300">{label}</label>
    <textarea
      className={`bg-brand-surface border ${error ? 'border-red-500' : 'border-gray-700'} rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-colors min-h-[120px]`}
      {...props}
    />
    {error && <span className="text-xs text-red-400">{error}</span>}
  </div>
);