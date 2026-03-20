"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import MediaAbout from '@/components/sections/about/MediaAbout';
import FeatureCardTwentySeven from '@/components/sections/feature/FeatureCardTwentySeven';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import TestimonialCardFive from '@/components/sections/testimonial/TestimonialCardFive';
import FaqBase from '@/components/sections/faq/FaqBase';
import ContactText from '@/components/sections/contact/ContactText';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import { Award, BarChart3, Brain, CheckCircle, Eye, Gift, HelpCircle, Shield, Sparkles, Star, Upload, Zap } from 'lucide-react';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="entrance-slide"
      borderRadius="pill"
      contentWidth="smallMedium"
      sizing="large"
      cardStyle="solid"
      primaryButtonStyle="flat"
      secondaryButtonStyle="radial-glow"
      headingFontWeight="bold"
      background="circleGradient"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleFullscreen
          navItems={[
            { name: "Upload", id: "upload" },
            { name: "Analysis", id: "analysis" },
            { name: "Hairstyles", id: "hairstyles" },
            { name: "How It Works", id: "how-it-works" },
            { name: "FAQ", id: "faq" }
          ]}
          brandName="FaceStyle AI"
          bottomLeftText="Powered by Advanced AI"
          bottomRightText="hello@facestyle.ai"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplit
          title="Discover Your Perfect Hairstyle with AI"
          description="Upload your photo and let our advanced facial analysis technology recommend hairstyles tailored to your unique face shape, features, and personal style. Get personalized recommendations in seconds with confidence scores."
          background={{ variant: "canvas-reveal" }}
          tag="AI-Powered Beauty"
          tagIcon={Sparkles}
          tagAnimation="slide-up"
          buttons={[
            { text: "Analyze My Face", href: "#upload" },
            { text: "View Examples", href: "#hairstyles" }
          ]}
          buttonAnimation="slide-up"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BCLvs2Go3pfxWsS8ZFTKpVE7v2/a-modern-tech-interface-showing-facial-a-1773988641673-bb224206.png"
          imageAlt="Facial analysis interface with AI visualization"
          mediaAnimation="slide-up"
          imagePosition="right"
          fixedMediaHeight={true}
          avatars={[
            { src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BCLvs2Go3pfxWsS8ZFTKpVE7v2/a-professional-headshot-of-a-happy-custo-1773988642303-8a6ce8da.png", alt: "Sarah - happy customer" },
            { src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BCLvs2Go3pfxWsS8ZFTKpVE7v2/a-professional-headshot-of-a-smiling-per-1773988641732-3bbf2833.png", alt: "Michael - satisfied user" },
            { src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BCLvs2Go3pfxWsS8ZFTKpVE7v2/a-professional-headshot-of-a-confident-w-1773988640118-2c7c8f0c.png", alt: "Jessica - verified customer" },
            { src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BCLvs2Go3pfxWsS8ZFTKpVE7v2/a-professional-headshot-of-a-smiling-man-1773988640001-ce70bb2a.png", alt: "David - verified user" }
          ]}
          avatarText="Join 50,000+ users who transformed their look"
          marqueeItems={[
            { type: "text-icon", text: "Accurate Face Detection", icon: CheckCircle },
            { type: "text-icon", text: "Personalized Recommendations", icon: Sparkles },
            { type: "text-icon", text: "AR Hairstyle Preview", icon: Zap },
            { type: "text-icon", text: "Privacy Protected", icon: Shield }
          ]}
          marqueeSpeed={40}
          showMarqueeCard={true}
        />
      </div>

      <div id="about" data-section="about">
        <MediaAbout
          title="How Facial Analysis Works"
          description="Our proprietary facial analysis system uses advanced computer vision and machine learning to analyze your face shape, jawline, forehead width, cheekbone structure, and other key features. We then map these characteristics to curated hairstyle recommendations tailored specifically to your unique facial structure."
          tag="Advanced Technology"
          tagIcon={Brain}
          tagAnimation="opacity"
          buttons={[{ text: "Learn More", href: "#how-it-works" }]}
          buttonAnimation="blur-reveal"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BCLvs2Go3pfxWsS8ZFTKpVE7v2/a-computer-interface-showing-face-shape--1773988641784-4bd95f35.png?_wi=1"
          imageAlt="Facial analysis dashboard with measurements"
          useInvertedBackground={false}
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardTwentySeven
          title="Comprehensive Face Analysis Features"
          description="Our platform provides detailed facial analysis with multiple assessment dimensions to ensure you get the most accurate hairstyle recommendations."
          tag="Key Features"
          tagIcon={Star}
          tagAnimation="slide-up"
          buttons={[{ text: "Get Started", href: "#upload" }]}
          buttonAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={true}
          features={[
            {
              id: "face-shape",              title: "Face Shape Detection",              descriptions: [
                "Identifies your face shape (oval, round, square, heart, diamond)",                "Uses geometric ratios and landmark detection for accuracy"
              ],
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BCLvs2Go3pfxWsS8ZFTKpVE7v2/a-professional-headshot-showing-a-person-1773988641821-cb844bdc.png"
            },
            {
              id: "jaw-analysis",              title: "Jawline Analysis",              descriptions: [
                "Measures jawline definition and width",                "Assesses how different styles will frame your features"
              ],
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BCLvs2Go3pfxWsS8ZFTKpVE7v2/a-clean-drag-and-drop-upload-interface-f-1773988640350-0ef541f4.png"
            },
            {
              id: "forehead-width",              title: "Forehead & Width Assessment",              descriptions: [
                "Analyzes forehead proportion and face width",                "Recommends styles that balance facial proportions"
              ],
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BCLvs2Go3pfxWsS8ZFTKpVE7v2/a-computer-interface-showing-face-shape--1773988641784-4bd95f35.png?_wi=2"
            },
            {
              id: "cheekbone-structure",              title: "Cheekbone Structure Analysis",              descriptions: [
                "Evaluates cheekbone prominence and placement",                "Suggests styles that enhance or soften features as desired"
              ],
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BCLvs2Go3pfxWsS8ZFTKpVE7v2/a-professional-headshot-of-a-person-wear-1773988641596-6ec02128.png?_wi=1"
            },
            {
              id: "confidence-score",              title: "Confidence Scoring",              descriptions: [
                "Each recommendation includes a confidence percentage",                "Transparency in how well each style matches your features"
              ],
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BCLvs2Go3pfxWsS8ZFTKpVE7v2/a-professional-headshot-showing-a-sleek--1773988641001-a7686a5c.png?_wi=1"
            },
            {
              id: "gender-detection",              title: "Gender-Specific Recommendations",              descriptions: [
                "Auto-detects gender or allows manual selection",                "Tailors recommendations to preferred aesthetic styles"
              ],
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BCLvs2Go3pfxWsS8ZFTKpVE7v2/a-professional-headshot-featuring-a-volu-1773988642342-631522a5.png?_wi=1"
            }
          ]}
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
        />
      </div>

      <div id="hairstyles" data-section="hairstyles">
        <ProductCardThree
          title="Top Hairstyle Recommendations"
          description="Explore curated hairstyles matched to your face shape and personal preferences. Each recommendation includes detailed styling tips and confidence scores."
          tag="Personalized Picks"
          tagIcon={Award}
          tagAnimation="opacity"
          buttons={[{ text: "Upload Your Photo", href: "#upload" }]}
          buttonAnimation="blur-reveal"
          textboxLayout="default"
          useInvertedBackground={false}
          products={[
            {
              id: "layered-waves",              name: "Soft Layered Waves",              price: "Confidence: 94%",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BCLvs2Go3pfxWsS8ZFTKpVE7v2/a-professional-headshot-of-a-person-wear-1773988641596-6ec02128.png?_wi=2",              imageAlt: "Soft layered wavy hairstyle",              isFavorited: false
            },
            {
              id: "modern-bob",              name: "Modern Sleek Bob",              price: "Confidence: 89%",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BCLvs2Go3pfxWsS8ZFTKpVE7v2/a-professional-headshot-showing-a-sleek--1773988641001-a7686a5c.png?_wi=2",              imageAlt: "Modern sleek bob cut",              isFavorited: false
            },
            {
              id: "defined-curls",              name: "Defined Curly Style",              price: "Confidence: 91%",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BCLvs2Go3pfxWsS8ZFTKpVE7v2/a-professional-headshot-featuring-a-volu-1773988642342-631522a5.png?_wi=2",              imageAlt: "Volumetric defined curls",              isFavorited: false
            },
            {
              id: "long-straight",              name: "Long Straight with Layers",              price: "Confidence: 87%",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BCLvs2Go3pfxWsS8ZFTKpVE7v2/a-professional-headshot-of-a-person-with-1773988640233-f39c6295.png",              imageAlt: "Long straight layered hair",              isFavorited: false
            },
            {
              id: "textured-shag",              name: "Modern Textured Shag",              price: "Confidence: 92%",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BCLvs2Go3pfxWsS8ZFTKpVE7v2/a-professional-headshot-showing-a-modern-1773988642407-20e6829c.png",              imageAlt: "Textured modern shag cut",              isFavorited: false
            },
            {
              id: "ar-preview",              name: "Virtual Try-On with AR",              price: "Confidence: 100%",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BCLvs2Go3pfxWsS8ZFTKpVE7v2/an-augmented-reality-preview-interface-s-1773988642192-25132aca.png?_wi=1",              imageAlt: "Augmented reality hairstyle preview",              isFavorited: false
            }
          ]}
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
        />
      </div>

      <div id="how-it-works" data-section="how-it-works">
        <MetricCardOne
          title="Our Process in 4 Simple Steps"
          description="From upload to personalized recommendations, see how we analyze your features and match you with perfect hairstyles."
          tag="How It Works"
          tagIcon={Zap}
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={true}
          metrics={[
            {
              id: "step-1",              value: "1",              title: "Upload Photo",              description: "Securely upload a clear photo of your face. We support jpeg, png, and webp formats.",              icon: Upload
            },
            {
              id: "step-2",              value: "2",              title: "Face Detection",              description: "Our AI detects your face and extracts 68+ facial landmarks for comprehensive analysis.",              icon: Eye
            },
            {
              id: "step-3",              value: "3",              title: "Feature Analysis",              description: "We analyze face shape, jawline, forehead, cheekbones, and other key structural features.",              icon: BarChart3
            },
            {
              id: "step-4",              value: "4",              title: "Get Recommendations",              description: "Receive 5-10 personalized hairstyle recommendations with confidence scores and AR preview.",              icon: Gift
            }
          ]}
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardFive
          title="What Our Users Say"
          description="Join thousands of satisfied users who've discovered their perfect hairstyle with FaceStyle AI."
          tag="Real Reviews"
          tagIcon={Star}
          tagAnimation="opacity"
          buttons={[{ text: "Share Your Story", href: "#contact" }]}
          buttonAnimation="blur-reveal"
          textboxLayout="split"
          useInvertedBackground={false}
          testimonials={[
            {
              id: "review-1",              name: "Sarah Martinez",              date: "2 weeks ago",              title: "Hair Stylist",              quote: "This app changed how I recommend cuts to clients. The facial analysis is incredibly accurate and my clients love seeing what they'll look like before we make the cut.",              tag: "Professional Stylist",              avatarSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BCLvs2Go3pfxWsS8ZFTKpVE7v2/a-professional-headshot-of-a-happy-custo-1773988642303-8a6ce8da.png",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BCLvs2Go3pfxWsS8ZFTKpVE7v2/a-professional-headshot-of-a-person-wear-1773988641596-6ec02128.png?_wi=3"
            },
            {
              id: "review-2",              name: "Michael Chen",              date: "1 month ago",              title: "Marketing Director",              quote: "I was skeptical at first, but the recommendations were spot-on. I got the modern bob and it perfectly complements my face shape. Best beauty investment ever!",              tag: "Verified Customer",              avatarSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BCLvs2Go3pfxWsS8ZFTKpVE7v2/a-professional-headshot-of-a-smiling-per-1773988641732-3bbf2833.png",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BCLvs2Go3pfxWsS8ZFTKpVE7v2/a-professional-headshot-showing-a-sleek--1773988641001-a7686a5c.png?_wi=3"
            },
            {
              id: "review-3",              name: "Jessica Wong",              date: "3 weeks ago",              title: "Creative Director",              quote: "The AR preview feature is amazing! I could see how different styles looked on me before committing. The confidence scores really helped me make the right choice.",              tag: "AR Feature Lover",              avatarSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BCLvs2Go3pfxWsS8ZFTKpVE7v2/a-professional-headshot-of-a-confident-w-1773988640118-2c7c8f0c.png",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BCLvs2Go3pfxWsS8ZFTKpVE7v2/an-augmented-reality-preview-interface-s-1773988642192-25132aca.png?_wi=2"
            },
            {
              id: "review-4",              name: "David Thompson",              date: "1 week ago",              title: "Software Engineer",              quote: "As someone in tech, I appreciate the sophisticated algorithms behind this. The face shape analysis is genuinely impressive and the recommendations are personalized.",              tag: "Tech Enthusiast",              avatarSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BCLvs2Go3pfxWsS8ZFTKpVE7v2/a-professional-headshot-of-a-smiling-man-1773988640001-ce70bb2a.png",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BCLvs2Go3pfxWsS8ZFTKpVE7v2/a-professional-headshot-featuring-a-volu-1773988642342-631522a5.png?_wi=3"
            }
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqBase
          title="Frequently Asked Questions"
          description="Get answers to common questions about FaceStyle AI, our analysis process, privacy, and recommendations."
          tag="Help & Support"
          tagIcon={HelpCircle}
          tagAnimation="opacity"
          textboxLayout="default"
          useInvertedBackground={true}
          faqsAnimation="blur-reveal"
          faqs={[
            {
              id: "faq-1",              title: "How accurate is the facial analysis?",              content: "Our facial analysis uses MediaPipe and advanced computer vision algorithms trained on thousands of diverse faces. The system achieves 94-98% accuracy in face shape detection and feature analysis. Accuracy may vary based on photo quality, lighting, and face angle."
            },
            {
              id: "faq-2",              title: "Is my photo stored after analysis?",              content: "No. We process your photo in real-time and delete it immediately after analysis by default. You can optionally save analysis results to your account for future reference, but photos are never stored without explicit consent. See our privacy policy for details."
            },
            {
              id: "faq-3",              title: "What face shapes do you support?",              content: "We support detection and analysis of 5 primary face shapes: Oval, Round, Square, Heart, and Diamond. Our algorithm also provides nuanced variations and blend classifications for more accurate recommendations."
            },
            {
              id: "faq-4",              title: "Can I use the app on mobile?",              content: "Yes! FaceStyle AI is fully responsive and optimized for mobile devices. You can upload photos directly from your phone's camera or gallery. The AR preview feature works on modern iOS and Android devices."
            },
            {
              id: "faq-5",              title: "How long does analysis take?",              content: "Most analyses complete within 2-3 seconds. Upload time depends on your internet connection and photo size. We automatically optimize photos for fast processing while maintaining quality."
            },
            {
              id: "faq-6",              title: "Are recommendations gender-specific?",              content: "We can auto-detect gender or you can manually select your preference. Recommendations adapt based on your selection, but many styles work across all genders. You can always explore all recommendations."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactText
          text="Ready to discover your perfect hairstyle? Upload your photo now and get personalized recommendations powered by AI."
          animationType="entrance-slide"
          buttons={[
            { text: "Analyze My Face Now", href: "#upload" },
            { text: "Contact Support", href: "mailto:hello@facestyle.ai" }
          ]}
          background={{ variant: "gradient-bars" }}
          useInvertedBackground={true}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseReveal
          columns={[
            {
              title: "Product",              items: [
                { label: "Features", href: "#features" },
                { label: "How It Works", href: "#how-it-works" },
                { label: "Pricing", href: "#pricing" },
                { label: "FAQ", href: "#faq" }
              ]
            },
            {
              title: "Company",              items: [
                { label: "About Us", href: "/about" },
                { label: "Blog", href: "/blog" },
                { label: "Careers", href: "/careers" },
                { label: "Contact", href: "#contact" }
              ]
            },
            {
              title: "Legal",              items: [
                { label: "Privacy Policy", href: "/privacy" },
                { label: "Terms of Service", href: "/terms" },
                { label: "Cookie Policy", href: "/cookies" },
                { label: "Compliance", href: "/compliance" }
              ]
            },
            {
              title: "Connect",              items: [
                { label: "Twitter", href: "https://twitter.com/facestyle" },
                { label: "LinkedIn", href: "https://linkedin.com/company/facestyle" },
                { label: "Instagram", href: "https://instagram.com/facestyle" },
                { label: "Discord", href: "https://discord.gg/facestyle" }
              ]
            }
          ]}
          copyrightText="© 2024 FaceStyle AI. All rights reserved. Powered by advanced facial analysis technology."
        />
      </div>
    </ThemeProvider>
  );
}
