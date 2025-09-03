
// components/FaqList.tsx
'use client';

import FaqItem from './FaqItem';
import { FAQ } from '../types/faq';

interface FaqListProps {
  faqs: FAQ[];
}

export default function FaqList({ faqs }: FaqListProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:gap-6">
      {faqs.map((faq, index) => (
        <FaqItem key={faq.id} faq={faq} index={index} />
      ))}
    </div>
  );
}
