import { TooltipProviderProps } from '@radix-ui/react-tooltip';
import Link from 'next/link';
import { ReactNode } from 'react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from './ui/tooltip';

type TooltipButtonType = {
  link: {
    href: string;
    rel?: string;
    target?: string;
  };
  tooltipProvider: Omit<TooltipProviderProps, 'children'>;
  trigger: ReactNode;
  content: ReactNode;
};

const TooltipButton = ({
  link: { href, rel = 'noopener noreferrer', target = '_blank' },
  tooltipProvider,
  trigger,
  content,
}: TooltipButtonType) => {
  return (
    <Link href={href} rel={rel} target={target}>
      <TooltipProvider {...tooltipProvider}>
        <Tooltip>
          <TooltipTrigger>{trigger}</TooltipTrigger>
          <TooltipContent>{content}</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </Link>
  );
};

export default TooltipButton;
