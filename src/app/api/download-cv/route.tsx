import { NextResponse } from 'next/server';
import { renderToBuffer } from '@react-pdf/renderer';
import { cvData } from '@/lib/cvData';
import { Document, Page, Text, View, StyleSheet, Font } from '@react-pdf/renderer';

// Register font with built-in Helvetica (no external fetch needed)
Font.register({
  family: 'Helvetica',
  fonts: [
    { src: 'Helvetica', fontWeight: 'normal' },
    { src: 'Helvetica-Bold', fontWeight: 'bold' },
  ],
});

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontFamily: 'Helvetica',
    fontSize: 10,
    color: '#000000',
    backgroundColor: '#ffffff',
  },

  // Header - Clean separated header
  header: {
    marginBottom: 15,
    paddingBottom: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#000000',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 3,
    textAlign: 'center',
  },
  title: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 8,
    textAlign: 'center',
  },
  contactContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
  },
  contactItem: {
    fontSize: 8,
    color: '#000000',
  },

  // Section spacing
  section: {
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 6,
    paddingBottom: 2,
    borderBottomWidth: 1,
    borderBottomColor: '#000000',
    textTransform: 'uppercase',
  },
  summary: {
    fontSize: 9,
    color: '#000000',
    lineHeight: 1.4,
  },

  // Two Column Layout
  twoColumn: {
    flexDirection: 'row',
    gap: 25,
  },
  column: {
    flex: 1,
  },

  // Experience
  experienceItem: {
    marginBottom: 10,
  },
  experienceHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 1,
  },
  role: {
    fontSize: 9,
    fontWeight: 'bold',
    color: '#000000',
  },
  period: {
    fontSize: 8,
    color: '#000000',
  },
  company: {
    fontSize: 9,
    color: '#000000',
    marginBottom: 2,
  },
  location: {
    fontSize: 8,
    color: '#666666',
    marginBottom: 2,
  },
  description: {
    fontSize: 8,
    color: '#000000',
    lineHeight: 1.3,
  },

  // Education
  educationItem: {
    marginBottom: 8,
  },
  school: {
    fontSize: 9,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 1,
  },
  degree: {
    fontSize: 8,
    color: '#000000',
    marginBottom: 1,
  },
  eduPeriod: {
    fontSize: 8,
    color: '#666666',
  },

  // Skills
  skillCategory: {
    marginBottom: 6,
  },
  skillCategoryTitle: {
    fontSize: 9,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 3,
  },
  skillTagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 4,
  },
  skillTag: {
    fontSize: 7,
    color: '#000000',
  },

  // Projects
  projectItem: {
    marginBottom: 8,
  },
  projectName: {
    fontSize: 9,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 1,
  },
  projectTech: {
    fontSize: 8,
    color: '#666666',
    marginBottom: 1,
  },
  projectDesc: {
    fontSize: 8,
    color: '#000000',
    lineHeight: 1.3,
  },

  // Certificates & Awards - Simple list
  listItem: {
    marginBottom: 5,
    paddingBottom: 3,
    borderBottomWidth: 0.5,
    borderBottomColor: '#e0e0e0',
  },
  listItemHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  listItemTitle: {
    fontSize: 8,
    fontWeight: 'bold',
    color: '#000000',
    flex: 1,
  },
  listItemYear: {
    fontSize: 8,
    color: '#000000',
  },
  listItemSubtitle: {
    fontSize: 7,
    color: '#666666',
  },

  // Footer
  footer: {
    position: 'absolute',
    bottom: 15,
    left: 30,
    right: 30,
    textAlign: 'center',
    fontSize: 7,
    color: '#666666',
    paddingTop: 5,
    borderTopWidth: 0.5,
    borderTopColor: '#cccccc',
  },
});

// Clean CV Document - Black & White, Well Spaced
const CVPDFDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>

      {/* HEADER - Clean and Centered */}
      <View style={styles.header}>
        <Text style={styles.name}>{cvData.personal.name}</Text>
        <Text style={styles.title}>{cvData.personal.title}</Text>
        <View style={styles.contactContainer}>
          <Text style={styles.contactItem}>{cvData.personal.email}</Text>
          <Text style={styles.contactItem}>{cvData.personal.phone}</Text>
          <Text style={styles.contactItem}>{cvData.personal.location}</Text>
        </View>
        <View style={styles.contactContainer}>
          <Text style={styles.contactItem}>{cvData.personal.linkedin}</Text>
          <Text style={styles.contactItem}>{cvData.personal.github}</Text>
        </View>
      </View>

      {/* PROFILE SUMMARY */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Profile</Text>
        <Text style={styles.summary}>{cvData.summary}</Text>
      </View>

      {/* TWO COLUMN LAYOUT */}
      <View style={styles.twoColumn}>

        {/* LEFT COLUMN */}
        <View style={styles.column}>

          {/* SKILLS */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Skills</Text>
            {cvData.skills.map((skill: { category: string; items: string[] }, index: number) => (
              <View key={index} style={styles.skillCategory}>
                <Text style={styles.skillCategoryTitle}>{skill.category}</Text>
                <View style={styles.skillTagsContainer}>
                  {skill.items.map((item: string, i: number) => (
                    <Text key={i} style={styles.skillTag}>
                      {item}{i < skill.items.length - 1 ? ' | ' : ''}
                    </Text>
                  ))}
                </View>
              </View>
            ))}
          </View>

          {/* EXPERIENCE */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Experience</Text>
            {cvData.experience.map((exp: { role: string; company: string; period: string; location: string; description: string }, index: number) => (
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

          {/* EDUCATION */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Education</Text>
            {cvData.education.map((edu: { school: string; degree: string; period: string; location: string }, index: number) => (
              <View key={index} style={styles.educationItem}>
                <Text style={styles.school}>{edu.school}</Text>
                <Text style={styles.degree}>{edu.degree}</Text>
                <Text style={styles.eduPeriod}>{edu.period} | {edu.location}</Text>
              </View>
            ))}
          </View>

        </View>

        {/* RIGHT COLUMN */}
        <View style={styles.column}>

          {/* PROJECTS */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Projects</Text>
            {cvData.projects.map((project: { name: string; description: string; tech: string }, index: number) => (
              <View key={index} style={styles.projectItem}>
                <Text style={styles.projectName}>{project.name}</Text>
                <Text style={styles.projectTech}>{project.tech}</Text>
                <Text style={styles.projectDesc}>{project.description}</Text>
              </View>
            ))}
          </View>

          {/* CERTIFICATIONS */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Certifications</Text>
            {cvData.certificates.map((cert: { name: string; issuer: string; year: string }, index: number) => (
              <View key={index} style={styles.listItem}>
                <View style={styles.listItemHeader}>
                  <Text style={styles.listItemTitle}>{cert.name}</Text>
                  <Text style={styles.listItemYear}>{cert.year}</Text>
                </View>
                <Text style={styles.listItemSubtitle}>{cert.issuer}</Text>
              </View>
            ))}
          </View>

          {/* AWARDS */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Awards</Text>
            {cvData.awards.map((award: { title: string; organization: string; year: string }, index: number) => (
              <View key={index} style={styles.listItem}>
                <View style={styles.listItemHeader}>
                  <Text style={styles.listItemTitle}>{award.title}</Text>
                  <Text style={styles.listItemYear}>{award.year}</Text>
                </View>
                <Text style={styles.listItemSubtitle}>{award.organization}</Text>
              </View>
            ))}
          </View>

        </View>
      </View>

      {/* FOOTER */}
      <View style={styles.footer} fixed>
        <Text>{cvData.personal.website}</Text>
      </View>

    </Page>
  </Document>
);

export async function GET() {
  try {
    const buffer = await renderToBuffer(<CVPDFDocument />);

    return new NextResponse(Buffer.from(buffer), {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="CV-Muhammad-Fajar-Anshori.pdf"',
      },
    });
  } catch (error) {
    console.error('Error generating PDF:', error);
    return NextResponse.json(
      { error: 'Failed to generate PDF' },
      { status: 500 }
    );
  }
}