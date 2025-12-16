import { onMounted, onUnmounted } from 'vue';

const BASE_URL = 'https://jigomit-mental-health-a.netlify.app';

// Breadcrumb schema generator
export const useBreadcrumbSchema = (items) => {
  const schemaId = 'breadcrumb-schema';

  const addSchema = () => {
    if (typeof document === 'undefined') return;

    // Remove existing
    const existing = document.querySelector(`script[data-schema="${schemaId}"]`);
    if (existing) existing.remove();

    const breadcrumbSchema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      'itemListElement': items.map((item, index) => ({
        '@type': 'ListItem',
        'position': index + 1,
        'name': item.name,
        'item': item.path.startsWith('http') ? item.path : `${BASE_URL}${item.path}`
      }))
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-schema', schemaId);
    script.textContent = JSON.stringify(breadcrumbSchema);
    document.head.appendChild(script);
  };

  const removeSchema = () => {
    if (typeof document === 'undefined') return;
    const existing = document.querySelector(`script[data-schema="${schemaId}"]`);
    if (existing) existing.remove();
  };

  onMounted(addSchema);
  onUnmounted(removeSchema);
};

// Service schema for services page
export const useServiceSchema = (services) => {
  const schemaId = 'service-schema';

  const addSchema = () => {
    if (typeof document === 'undefined') return;

    const existing = document.querySelector(`script[data-schema="${schemaId}"]`);
    if (existing) existing.remove();

    const serviceSchema = {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      'name': 'Free Mental Health Services',
      'description': 'Comprehensive free mental health support services including therapy, counseling, and crisis support',
      'itemListElement': services.map((service, index) => ({
        '@type': 'ListItem',
        'position': index + 1,
        'item': {
          '@type': 'Service',
          'name': service.title,
          'description': service.description,
          'provider': {
            '@type': 'Organization',
            'name': 'Mental Health Awareness'
          },
          'areaServed': 'Worldwide',
          'serviceType': 'Mental Health Support'
        }
      }))
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-schema', schemaId);
    script.textContent = JSON.stringify(serviceSchema);
    document.head.appendChild(script);
  };

  const removeSchema = () => {
    if (typeof document === 'undefined') return;
    const existing = document.querySelector(`script[data-schema="${schemaId}"]`);
    if (existing) existing.remove();
  };

  onMounted(addSchema);
  onUnmounted(removeSchema);
};

// Event schema for events page
export const useEventSchema = (events) => {
  const schemaId = 'event-schema';

  const addSchema = () => {
    if (typeof document === 'undefined') return;

    const existing = document.querySelector(`script[data-schema="${schemaId}"]`);
    if (existing) existing.remove();

    const eventSchema = {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      'name': 'Free Mental Health Workshops and Events 2025',
      'itemListElement': events.map((event, index) => ({
        '@type': 'ListItem',
        'position': index + 1,
        'item': {
          '@type': 'Event',
          'name': event.name,
          'description': event.detail,
          'startDate': event.date,
          'location': {
            '@type': event.location === 'Virtual' ? 'VirtualLocation' : 'Place',
            'name': event.location,
            'url': event.location === 'Virtual' ? BASE_URL + '/events' : undefined
          },
          'organizer': {
            '@type': 'Organization',
            'name': 'Mental Health Awareness',
            'url': BASE_URL
          },
          'isAccessibleForFree': true,
          'eventAttendanceMode': event.location === 'Virtual'
            ? 'https://schema.org/OnlineEventAttendanceMode'
            : 'https://schema.org/OfflineEventAttendanceMode'
        }
      }))
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-schema', schemaId);
    script.textContent = JSON.stringify(eventSchema);
    document.head.appendChild(script);
  };

  const removeSchema = () => {
    if (typeof document === 'undefined') return;
    const existing = document.querySelector(`script[data-schema="${schemaId}"]`);
    if (existing) existing.remove();
  };

  onMounted(addSchema);
  onUnmounted(removeSchema);
};

// Resource/Download schema for resources page
export const useResourceSchema = (resources) => {
  const schemaId = 'resource-schema';

  const addSchema = () => {
    if (typeof document === 'undefined') return;

    const existing = document.querySelector(`script[data-schema="${schemaId}"]`);
    if (existing) existing.remove();

    const resourceSchema = {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      'name': 'Free Mental Health Resources and Worksheets',
      'description': 'Free downloadable mental health worksheets, guides, and self-help resources',
      'itemListElement': resources.map((resource, index) => ({
        '@type': 'ListItem',
        'position': index + 1,
        'item': {
          '@type': 'DigitalDocument',
          'name': resource.title,
          'description': resource.description,
          'encodingFormat': 'application/pdf',
          'isAccessibleForFree': true,
          'creator': {
            '@type': 'Organization',
            'name': 'Mental Health Awareness'
          }
        }
      }))
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-schema', schemaId);
    script.textContent = JSON.stringify(resourceSchema);
    document.head.appendChild(script);
  };

  const removeSchema = () => {
    if (typeof document === 'undefined') return;
    const existing = document.querySelector(`script[data-schema="${schemaId}"]`);
    if (existing) existing.remove();
  };

  onMounted(addSchema);
  onUnmounted(removeSchema);
};

// FAQ schema for any page with FAQs
export const useFaqSchema = (faqs) => {
  const schemaId = 'faq-page-schema';

  const addSchema = () => {
    if (typeof document === 'undefined' || !faqs?.length) return;

    const existing = document.querySelector(`script[data-schema="${schemaId}"]`);
    if (existing) existing.remove();

    const faqSchema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': faqs.map(faq => ({
        '@type': 'Question',
        'name': faq.question,
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': faq.answer
        }
      }))
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-schema', schemaId);
    script.textContent = JSON.stringify(faqSchema);
    document.head.appendChild(script);
  };

  const removeSchema = () => {
    if (typeof document === 'undefined') return;
    const existing = document.querySelector(`script[data-schema="${schemaId}"]`);
    if (existing) existing.remove();
  };

  onMounted(addSchema);
  onUnmounted(removeSchema);
};
