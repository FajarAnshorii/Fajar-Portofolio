import React from 'react';
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Font,
} from '@react-pdf/renderer';
import { cvData } from '@/lib/cvData';

// Register fonts
Font.register({
  family: 'Inter',
  fonts: [
    { src: 'https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hjp-Ek-_EeA.woff2', fontWeight: 400 },
    { src: 'https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuGKYAZ9hjp-Ek-_EeA.woff2', fontWeight: 600 },
    { src: 'https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuFuYAZ9hjp-Ek-_EeA.woff2', fontWeight: 700 },
  ],
});

const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontFamily: 'Inter',
    fontSize: 10,
    color: '#1a1a1a',
    backgroundColor: '#ffffff',
  },
  header: {
    marginBottom: 20,
    paddingBottom: 15,
    borderBottomWidth: 2,
    borderBottomColor: '#2563eb',
  },
  name: {
    fontSize: 24,
    fontWeight: 700,
    color: '#1a1a1a',
    marginBottom: 4,
  },
  title: {
    fontSize: 14,
    fontWeight: 600,
    color: '#2563eb',
    marginBottom: 10,
  },
  contactRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 15,
  },
  contactItem: {
    fontSize: 9,
    color: '#666',
  },
  link: {
    fontSize: 9,
    color: '#2563eb',
    textDecoration: 'none',
  },
  section: {
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: 700,
    color: '#2563eb',
    marginBottom: 8,
    paddingBottom: 4,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  summary: {
    fontSize: 9,
    color: '#4b5563',
    lineHeight: 1.6,
    textAlign: 'justify',
  },
  twoColumn: {
    flexDirection: 'row',
    gap: 25,
  },
  column: {
    flex: 1,
  },
  // Experience styles
  experienceItem: {
    marginBottom: 12,
  },
  experienceHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    marginBottom: 2,
  },
  role: {
    fontSize: 11,
    fontWeight: 600,
    color: '#1a1a1a',
  },
  company: {
    fontSize: 10,
    fontWeight: 600,
    color: '#2563eb',
  },
  period: {
    fontSize: 9,
    color: '#6b7280',
  },
  location: {
    fontSize: 9,
    color: '#9ca3af',
    marginBottom: 4,
  },
  description: {
    fontSize: 9,
    color: '#4b5563',
    lineHeight: 1.5,
  },
  // Education styles
  educationItem: {
    marginBottom: 10,
  },
  school: {
    fontSize: 11,
    fontWeight: 600,
    color: '#1a1a1a',
    marginBottom: 2,
  },
  degree: {
    fontSize: 9,
    color: '#2563eb',
    marginBottom: 2,
  },
  eduPeriod: {
    fontSize: 9,
    color: '#6b7280',
  },
  // Skills styles
  skillCategory: {
    marginBottom: 8,
  },
  skillCategoryTitle: {
    fontSize: 10,
    fontWeight: 600,
    color: '#374151',
    marginBottom: 4,
  },
  skillTags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 4,
  },
  skillTag: {
    backgroundColor: '#f3f4f6',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 4,
    fontSize: 8,
    color: '#4b5563',
  },
  // Projects styles
  projectItem: {
    marginBottom: 8,
  },
  projectName: {
    fontSize: 10,
    fontWeight: 600,
    color: '#1a1a1a',
    marginBottom: 2,
  },
  projectTech: {
    fontSize: 8,
    color: '#2563eb',
    marginBottom: 2,
  },
  projectDesc: {
    fontSize: 9,
    color: '#4b5563',
    lineHeight: 1.4,
  },
  // Certificates & Awards styles
  certItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    marginBottom: 6,
    paddingBottom: 4,
    borderBottomWidth: 0.5,
    borderBottomColor: '#e5e7eb',
  },
  certName: {
    fontSize: 9,
    color: '#1a1a1a',
    flex: 1,
  },
  certIssuer: {
    fontSize: 8,
    color: '#6b7280',
    flex: 1,
  },
  certYear: {
    fontSize: 8,
    color: '#2563eb',
    fontWeight: 600,
  },
  // Footer
  footer: {
    position: 'absolute',
    bottom: 25,
    left: 40,
    right: 40,
    textAlign: 'center',
    fontSize: 8,
    color: '#9ca3af',
    paddingTop: 10,
    borderTopWidth: 0.5,
    borderTopColor: '#e5e7eb',
  },
});

const CVTemplate: React.FC = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.name}>{cvData.personal.name}</Text>
        <Text style={styles.title}>{cvData.personal.title}</Text>
        <View style={styles.contactRow}>
          <Text style={styles.contactItem}>{cvData.personal.email}</Text>
          <Text style={styles.contactItem}>{cvData.personal.phone}</Text>
          <Text style={styles.contactItem}>{cvData.personal.location}</Text>
          <Text style={styles.link}>{cvData.personal.linkedin}</Text>
          <Text style={styles.link}>{cvData.personal.github}</Text>
        </View>
      </View>

      {/* Summary */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>PROFILE</Text>
        <Text style={styles.summary}>{cvData.summary}</Text>
      </View>

      {/* Two Column Layout */}
      <View style={styles.twoColumn}>
        {/* Left Column */}
        <View style={styles.column}>
          {/* Skills */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>SKILLS</Text>
            {cvData.skills.map((skill, index) => (
              <View key={index} style={styles.skillCategory}>
                <Text style={styles.skillCategoryTitle}>{skill.category}</Text>
                <View style={styles.skillTags}>
                  {skill.items.map((item, i) => (
                    <Text key={i} style={styles.skillTag}>{item}</Text>
                  ))}
                </View>
              </View>
            ))}
          </View>

          {/* Experience */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>EXPERIENCE</Text>
            {cvData.experience.map((exp, index) => (
              <View key={index} style={styles.experienceItem}>
                <View style={styles.experienceHeader}>
                  <Text style={styles.role}>{exp.role}</Text>
                  <Text style={styles.period}>{exp.period}</Text>
                </View>
                <Text style={styles.company}>{exp.company}</Text>
                <Text style={styles.location}>{exp.location}</Text>
                <Text style={styles.description}>{exp.description}</Text>
              </View>
            ))}
          </View>

          {/* Education */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>EDUCATION</Text>
            {cvData.education.map((edu, index) => (
              <View key={index} style={styles.educationItem}>
                <Text style={styles.school}>{edu.school}</Text>
                <Text style={styles.degree}>{edu.degree}</Text>
                <Text style={styles.eduPeriod}>{edu.period} | {edu.location}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Right Column */}
        <View style={styles.column}>
          {/* Projects */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>PROJECTS</Text>
            {cvData.projects.map((project, index) => (
              <View key={index} style={styles.projectItem}>
                <Text style={styles.projectName}>{project.name}</Text>
                <Text style={styles.projectTech}>{project.tech}</Text>
                <Text style={styles.projectDesc}>{project.description}</Text>
              </View>
            ))}
          </View>

          {/* Certificates */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>CERTIFICATIONS</Text>
            {cvData.certificates.map((cert, index) => (
              <View key={index} style={styles.certItem}>
                <View style={{ flex: 1 }}>
                  <Text style={styles.certName}>{cert.name}</Text>
                  <Text style={styles.certIssuer}>{cert.issuer}</Text>
                </View>
                <Text style={styles.certYear}>{cert.year}</Text>
              </View>
            ))}
          </View>

          {/* Awards */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>AWARDS & ACHIEVEMENTS</Text>
            {cvData.awards.map((award, index) => (
              <View key={index} style={styles.certItem}>
                <View style={{ flex: 1 }}>
                  <Text style={styles.certName}>{award.title}</Text>
                  <Text style={styles.certIssuer}>{award.organization}</Text>
                </View>
                <Text style={styles.certYear}>{award.year}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text>Generated from portfolio | {cvData.personal.website}</Text>
      </View>
    </Page>
  </Document>
);

export default CVTemplate;