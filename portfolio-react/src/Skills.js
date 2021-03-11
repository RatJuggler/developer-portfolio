import { useState } from "react";

const Skills = () => {

    const [data] = useState([
            {
                "_classMap": "com.portfolio.map.domain.Skill",
                "_classSQL": "com.portfolio.sql.domain.Skill",
                "id": 1,
                "level": "Core",
                "category": "Server Side",
                "skill": "Java",
                "description": "The Java language up to version 11"
            },
            {
                "_classMap": "com.portfolio.map.domain.Skill",
                "_classSQL": "com.portfolio.sql.domain.Skill",
                "id": 2,
                "level": "Proficient",
                "category": "Server Side",
                "skill": "Python",
                "description": "The Python language up to version 3.x"
            },
            {
                "_classMap": "com.portfolio.map.domain.Skill",
                "_classSQL": "com.portfolio.sql.domain.Skill",
                "id": 3,
                "level": "Familiar",
                "category": "Server Side",
                "skill": "JHipster",
                "description": "Application generation"
            },
            {
                "_classMap": "com.portfolio.map.domain.Skill",
                "_classSQL": "com.portfolio.sql.domain.Skill",
                "id": 4,
                "level": "Core",
                "category": "Server Side",
                "skill": "Java EE",
                "description": "Application framework up to version 8"
            },
            {
                "_classMap": "com.portfolio.map.domain.Skill",
                "_classSQL": "com.portfolio.sql.domain.Skill",
                "id": 5,
                "level": "Core",
                "category": "Server Side",
                "skill": "JPA",
                "description": "ORM using Hibernate and EclipseLink"
            },
            {
                "_classMap": "com.portfolio.map.domain.Skill",
                "_classSQL": "com.portfolio.sql.domain.Skill",
                "id": 6,
                "level": "Familiar",
                "category": "Server Side",
                "skill": "EJB 3.x",
                "description": "Session beans with annotations"
            },
            {
                "_classMap": "com.portfolio.map.domain.Skill",
                "_classSQL": "com.portfolio.sql.domain.Skill",
                "id": 7,
                "level": "Familiar",
                "category": "Server Side",
                "skill": "Servlet",
                "description": "Basic service framework"
            },
            {
                "_classMap": "com.portfolio.map.domain.Skill",
                "_classSQL": "com.portfolio.sql.domain.Skill",
                "id": 8,
                "level": "Familiar",
                "category": "Server Side",
                "skill": "JAX-RS",
                "description": "RESTful web services"
            },
            {
                "_classMap": "com.portfolio.map.domain.Skill",
                "_classSQL": "com.portfolio.sql.domain.Skill",
                "id": 9,
                "level": "Familiar",
                "category": "Server Side",
                "skill": "JMS",
                "description": "Java Message Service"
            },
            {
                "_classMap": "com.portfolio.map.domain.Skill",
                "_classSQL": "com.portfolio.sql.domain.Skill",
                "id": 10,
                "level": "Familiar",
                "category": "Server Side",
                "skill": "JTA",
                "description": "Java Transaction API"
            },
            {
                "_classMap": "com.portfolio.map.domain.Skill",
                "_classSQL": "com.portfolio.sql.domain.Skill",
                "id": 11,
                "level": "Familiar",
                "category": "Server Side",
                "skill": "CDI",
                "description": "Context and Dependency Injection"
            },
            {
                "_classMap": "com.portfolio.map.domain.Skill",
                "_classSQL": "com.portfolio.sql.domain.Skill",
                "id": 12,
                "level": "Familiar",
                "category": "Server Side",
                "skill": "Bean Validation",
                "description": "Validation using annotations"
            },
            {
                "_classMap": "com.portfolio.map.domain.Skill",
                "_classSQL": "com.portfolio.sql.domain.Skill",
                "id": 13,
                "level": "Core",
                "category": "Server Side",
                "skill": "Spring Framework",
                "description": "Application framework"
            },
            {
                "_classMap": "com.portfolio.map.domain.Skill",
                "_classSQL": "com.portfolio.sql.domain.Skill",
                "id": 14,
                "level": "Familiar",
                "category": "Server Side",
                "skill": "Spring Boot",
                "description": "Create stand-alone Spring applications"
            },
            {
                "_classMap": "com.portfolio.map.domain.Skill",
                "_classSQL": "com.portfolio.sql.domain.Skill",
                "id": 15,
                "level": "Core",
                "category": "Server Side",
                "skill": "Spring MVC",
                "description": "MVC framework"
            },
            {
                "_classMap": "com.portfolio.map.domain.Skill",
                "_classSQL": "com.portfolio.sql.domain.Skill",
                "id": 16,
                "level": "Familiar",
                "category": "Server Side",
                "skill": "Spring Web Flow",
                "description": "Stateful business task processing"
            },
            {
                "_classMap": "com.portfolio.map.domain.Skill",
                "_classSQL": "com.portfolio.sql.domain.Skill",
                "id": 17,
                "level": "Familiar",
                "category": "Server Side",
                "skill": "Spring Data",
                "description": "Data access framework"
            },
            {
                "_classMap": "com.portfolio.map.domain.Skill",
                "_classSQL": "com.portfolio.sql.domain.Skill",
                "id": 18,
                "level": "Familiar",
                "category": "Server Side",
                "skill": "Spring Security",
                "description": "Authentication and access-control"
            },
            {
                "_classMap": "com.portfolio.map.domain.Skill",
                "_classSQL": "com.portfolio.sql.domain.Skill",
                "id": 19,
                "level": "Familiar",
                "category": "Server Side",
                "skill": "Spring Session",
                "description": "Container neutral web session"
            },
            {
                "_classMap": "com.portfolio.map.domain.Skill",
                "_classSQL": "com.portfolio.sql.domain.Skill",
                "id": 20,
                "level": "Familiar",
                "category": "Server Side",
                "skill": "Spring Web Services",
                "description": "XML web services"
            },
            {
                "_classMap": "com.portfolio.map.domain.Skill",
                "_classSQL": "com.portfolio.sql.domain.Skill",
                "id": 21,
                "level": "Familiar",
                "category": "Server Side",
                "skill": "Spring Roo",
                "description": "Application generation"
            },
            {
                "_classMap": "com.portfolio.map.domain.Skill",
                "_classSQL": "com.portfolio.sql.domain.Skill",
                "id": 22,
                "level": "Core",
                "category": "Server Side",
                "skill": "Spring Batch",
                "description": "Batch processing"
            },
            {
                "_classMap": "com.portfolio.map.domain.Skill",
                "_classSQL": "com.portfolio.sql.domain.Skill",
                "id": 23,
                "level": "Core",
                "category": "Server Side",
                "skill": "Spring Integration",
                "description": "Enterprise application integration"
            },
            {
                "_classMap": "com.portfolio.map.domain.Skill",
                "_classSQL": "com.portfolio.sql.domain.Skill",
                "id": 24,
                "level": "Core",
                "category": "Server Side",
                "skill": "XML",
                "description": "Document markup language"
            },
            {
                "_classMap": "com.portfolio.map.domain.Skill",
                "_classSQL": "com.portfolio.sql.domain.Skill",
                "id": 25,
                "level": "Familiar",
                "category": "Server Side",
                "skill": "XSD",
                "description": "XML schema definition"
            },
            {
                "_classMap": "com.portfolio.map.domain.Skill",
                "_classSQL": "com.portfolio.sql.domain.Skill",
                "id": 26,
                "level": "Familiar",
                "category": "Server Side",
                "skill": "XSLT",
                "description": "XML transform language"
            },
            {
                "_classMap": "com.portfolio.map.domain.Skill",
                "_classSQL": "com.portfolio.sql.domain.Skill",
                "id": 27,
                "level": "Core",
                "category": "Server Side",
                "skill": "JSON",
                "description": "Data interchange format"
            },
            {
                "_classMap": "com.portfolio.map.domain.Skill",
                "_classSQL": "com.portfolio.sql.domain.Skill",
                "id": 28,
                "level": "Familiar",
                "category": "Server Side",
                "skill": "Thymeleaf",
                "description": "HTML templating engine"
            },
            {
                "_classMap": "com.portfolio.map.domain.Skill",
                "_classSQL": "com.portfolio.sql.domain.Skill",
                "id": 29,
                "level": "Core",
                "category": "Continuous Integration",
                "skill": "Git",
                "description": "Distributed version control"
            },
            {
                "_classMap": "com.portfolio.map.domain.Skill",
                "_classSQL": "com.portfolio.sql.domain.Skill",
                "id": 30,
                "level": "Core",
                "category": "Continuous Integration",
                "skill": "Apache Subversion",
                "description": "Centralized version control"
            },
            {
                "_classMap": "com.portfolio.map.domain.Skill",
                "_classSQL": "com.portfolio.sql.domain.Skill",
                "id": 31,
                "level": "Core",
                "category": "Continuous Integration",
                "skill": "JUnit",
                "description": "Unit testing framework"
            },
            {
                "_classMap": "com.portfolio.map.domain.Skill",
                "_classSQL": "com.portfolio.sql.domain.Skill",
                "id": 32,
                "level": "Core",
                "category": "Continuous Integration",
                "skill": "Mockito",
                "description": "Mock object testing framework"
            },
            {
                "_classMap": "com.portfolio.map.domain.Skill",
                "_classSQL": "com.portfolio.sql.domain.Skill",
                "id": 33,
                "level": "Core",
                "category": "Continuous Integration",
                "skill": "Apache Maven",
                "description": "Dependency management build tool"
            },
            {
                "_classMap": "com.portfolio.map.domain.Skill",
                "_classSQL": "com.portfolio.sql.domain.Skill",
                "id": 34,
                "level": "Familiar",
                "category": "Continuous Integration",
                "skill": "Gradle",
                "description": "Dependency management build tool"
            },
            {
                "_classMap": "com.portfolio.map.domain.Skill",
                "_classSQL": "com.portfolio.sql.domain.Skill",
                "id": 35,
                "level": "Core",
                "category": "Continuous Integration",
                "skill": "Jenkins",
                "description": "Automated building, testing and deploy"
            },
            {
                "_classMap": "com.portfolio.map.domain.Skill",
                "_classSQL": "com.portfolio.sql.domain.Skill",
                "id": 36,
                "level": "Core",
                "category": "Continuous Integration",
                "skill": "SonarQube",
                "description": "Code quality control"
            },
            {
                "_classMap": "com.portfolio.map.domain.Skill",
                "_classSQL": "com.portfolio.sql.domain.Skill",
                "id": 37,
                "level": "Familiar",
                "category": "Continuous Integration",
                "skill": "Nexus",
                "description": "Repository Manager"
            },
            {
                "_classMap": "com.portfolio.map.domain.Skill",
                "_classSQL": "com.portfolio.sql.domain.Skill",
                "id": 38,
                "level": "Familiar",
                "category": "Continuous Integration",
                "skill": "Liquibase",
                "description": "Database schema change management"
            },
            {
                "_classMap": "com.portfolio.map.domain.Skill",
                "_classSQL": "com.portfolio.sql.domain.Skill",
                "id": 39,
                "level": "Core",
                "category": "Middleware",
                "skill": "WebSphere",
                "description": "Enterprise Application Server"
            },
            {
                "_classMap": "com.portfolio.map.domain.Skill",
                "_classSQL": "com.portfolio.sql.domain.Skill",
                "id": 40,
                "level": "Core",
                "category": "Middleware",
                "skill": "WebLogic",
                "description": "Enterprise Application Server"
            },
            {
                "_classMap": "com.portfolio.map.domain.Skill",
                "_classSQL": "com.portfolio.sql.domain.Skill",
                "id": 41,
                "level": "Core",
                "category": "Middleware",
                "skill": "Apache Tomcat",
                "description": "Servlet container"
            },
            {
                "_classMap": "com.portfolio.map.domain.Skill",
                "_classSQL": "com.portfolio.sql.domain.Skill",
                "id": 42,
                "level": "Familiar",
                "category": "Middleware",
                "skill": "Apache HTTP Server",
                "description": "Web server"
            },
            {
                "_classMap": "com.portfolio.map.domain.Skill",
                "_classSQL": "com.portfolio.sql.domain.Skill",
                "id": 43,
                "level": "Familiar",
                "category": "Middleware",
                "skill": "GlassFish",
                "description": "Java EE Reference implementation"
            },
            {
                "_classMap": "com.portfolio.map.domain.Skill",
                "_classSQL": "com.portfolio.sql.domain.Skill",
                "id": 44,
                "level": "Familiar",
                "category": "Middleware",
                "skill": "Open Liberty",
                "description": "WebSphere lite"
            },
            {
                "_classMap": "com.portfolio.map.domain.Skill",
                "_classSQL": "com.portfolio.sql.domain.Skill",
                "id": 45,
                "level": "Core",
                "category": "Middleware",
                "skill": "IBM MQ",
                "description": "Message Queues"
            },
            {
                "_classMap": "com.portfolio.map.domain.Skill",
                "_classSQL": "com.portfolio.sql.domain.Skill",
                "id": 46,
                "level": "Proficient",
                "category": "Middleware",
                "skill": "Docker",
                "description": "PaaS containers"
            },
            {
                "_classMap": "com.portfolio.map.domain.Skill",
                "_classSQL": "com.portfolio.sql.domain.Skill",
                "id": 47,
                "level": "Proficient",
                "category": "Middleware",
                "skill": "Nginx",
                "description": "Web server, proxy and load balancing"
            },
            {
                "_classMap": "com.portfolio.map.domain.Skill",
                "_classSQL": "com.portfolio.sql.domain.Skill",
                "id": 48,
                "level": "Proficient",
                "category": "Middleware",
                "skill": "Node.js",
                "description": "Server side JavaScript"
            },
            {
                "_classMap": "com.portfolio.map.domain.Skill",
                "_classSQL": "com.portfolio.sql.domain.Skill",
                "id": 49,
                "level": "Core",
                "category": "Relational",
                "skill": "SQL",
                "description": "Structured Query Language"
            },
            {
                "_classMap": "com.portfolio.map.domain.Skill",
                "_classSQL": "com.portfolio.sql.domain.Skill",
                "id": 50,
                "level": "Core",
                "category": "Relational",
                "skill": "DDL",
                "description": "Tables, views and stored procedures"
            },
            {
                "_classMap": "com.portfolio.map.domain.Skill",
                "_classSQL": "com.portfolio.sql.domain.Skill",
                "id": 51,
                "level": "Core",
                "category": "Relational",
                "skill": "Oracle DB",
                "description": "Oracle Enterprise RDBMS"
            },
            {
                "_classMap": "com.portfolio.map.domain.Skill",
                "_classSQL": "com.portfolio.sql.domain.Skill",
                "id": 52,
                "level": "Familiar",
                "category": "Relational",
                "skill": "Oracle DB XE",
                "description": "Developer version"
            },
            {
                "_classMap": "com.portfolio.map.domain.Skill",
                "_classSQL": "com.portfolio.sql.domain.Skill",
                "id": 53,
                "level": "Core",
                "category": "Relational",
                "skill": "MS SQL Server",
                "description": "Microsoft RDBMS"
            },
            {
                "_classMap": "com.portfolio.map.domain.Skill",
                "_classSQL": "com.portfolio.sql.domain.Skill",
                "id": 54,
                "level": "Core",
                "category": "Relational",
                "skill": "MySQL",
                "description": "Open-source RDBMS"
            },
            {
                "_classMap": "com.portfolio.map.domain.Skill",
                "_classSQL": "com.portfolio.sql.domain.Skill",
                "id": 55,
                "level": "Familiar",
                "category": "Relational",
                "skill": "PostgreSQL",
                "description": "Open-source RDBMS"
            },
            {
                "_classMap": "com.portfolio.map.domain.Skill",
                "_classSQL": "com.portfolio.sql.domain.Skill",
                "id": 56,
                "level": "Core",
                "category": "Client Side",
                "skill": "HTML",
                "description": "HTML5 and SVG"
            },
            {
                "_classMap": "com.portfolio.map.domain.Skill",
                "_classSQL": "com.portfolio.sql.domain.Skill",
                "id": 57,
                "level": "Core",
                "category": "Client Side",
                "skill": "CSS",
                "description": "Cascading Style Sheets"
            },
            {
                "_classMap": "com.portfolio.map.domain.Skill",
                "_classSQL": "com.portfolio.sql.domain.Skill",
                "id": 58,
                "level": "Core",
                "category": "Client Side",
                "skill": "JavaScript",
                "description": "ECMAScript"
            },
            {
                "_classMap": "com.portfolio.map.domain.Skill",
                "_classSQL": "com.portfolio.sql.domain.Skill",
                "id": 59,
                "level": "Familiar",
                "category": "Client Side",
                "skill": "Bootstrap",
                "description": "CSS framework"
            },
            {
                "_classMap": "com.portfolio.map.domain.Skill",
                "_classSQL": "com.portfolio.sql.domain.Skill",
                "id": 60,
                "level": "Familiar",
                "category": "Client Side",
                "skill": "jQuery",
                "description": "JavaScript library"
            },
            {
                "_classMap": "com.portfolio.map.domain.Skill",
                "_classSQL": "com.portfolio.sql.domain.Skill",
                "id": 61,
                "level": "Proficient",
                "category": "Client Side",
                "skill": "TypeScript",
                "description": "Strictly typed JavaScript"
            },
            {
                "_classMap": "com.portfolio.map.domain.Skill",
                "_classSQL": "com.portfolio.sql.domain.Skill",
                "id": 62,
                "level": "Proficient",
                "category": "Legacy",
                "skill": "J2EE",
                "description": "Application framework"
            },
            {
                "_classMap": "com.portfolio.map.domain.Skill",
                "_classSQL": "com.portfolio.sql.domain.Skill",
                "id": 63,
                "level": "Proficient",
                "category": "Legacy",
                "skill": "EJB 2.x",
                "description": "Session beans defined using XML"
            },
            {
                "_classMap": "com.portfolio.map.domain.Skill",
                "_classSQL": "com.portfolio.sql.domain.Skill",
                "id": 64,
                "level": "Familiar",
                "category": "Legacy",
                "skill": "JSP",
                "description": "Java Server Pages, HTML templating"
            },
            {
                "_classMap": "com.portfolio.map.domain.Skill",
                "_classSQL": "com.portfolio.sql.domain.Skill",
                "id": 65,
                "level": "Familiar",
                "category": "Legacy",
                "skill": "JSTL",
                "description": "JSP Standard Tag Library"
            },
            {
                "_classMap": "com.portfolio.map.domain.Skill",
                "_classSQL": "com.portfolio.sql.domain.Skill",
                "id": 66,
                "level": "Familiar",
                "category": "Legacy",
                "skill": "JSF",
                "description": "Java Server Faces"
            },
            {
                "_classMap": "com.portfolio.map.domain.Skill",
                "_classSQL": "com.portfolio.sql.domain.Skill",
                "id": 67,
                "level": "Familiar",
                "category": "Legacy",
                "skill": "Apache Struts",
                "description": "MVC framework"
            },
            {
                "_classMap": "com.portfolio.map.domain.Skill",
                "_classSQL": "com.portfolio.sql.domain.Skill",
                "id": 68,
                "level": "Proficient",
                "category": "Legacy",
                "skill": "SOAP Web Services",
                "description": "XML web services"
            },
            {
                "_classMap": "com.portfolio.map.domain.Skill",
                "_classSQL": "com.portfolio.sql.domain.Skill",
                "id": 69,
                "level": "Familiar",
                "category": "Legacy",
                "skill": "JAX-WS",
                "description": "XML/SOAP web services"
            },
            {
                "_classMap": "com.portfolio.map.domain.Skill",
                "_classSQL": "com.portfolio.sql.domain.Skill",
                "id": 70,
                "level": "Proficient",
                "category": "Legacy",
                "skill": "Mainframe",
                "description": "Legacy systems"
            },
            {
                "_classMap": "com.portfolio.map.domain.Skill",
                "_classSQL": "com.portfolio.sql.domain.Skill",
                "id": 71,
                "level": "Proficient",
                "category": "Legacy",
                "skill": "PeopleSoft",
                "description": "Financials management package"
            },
            {
                "_classMap": "com.portfolio.map.domain.Skill",
                "_classSQL": "com.portfolio.sql.domain.Skill",
                "id": 72,
                "level": "Familiar",
                "category": "Legacy",
                "skill": "Apache Ant",
                "description": "Build tool"
            },
            {
                "_classMap": "com.portfolio.map.domain.Skill",
                "_classSQL": "com.portfolio.sql.domain.Skill",
                "id": 73,
                "level": "Proficient",
                "category": "Design",
                "skill": "SOA",
                "description": "Service Orientated Architecture"
            },
            {
                "_classMap": "com.portfolio.map.domain.Skill",
                "_classSQL": "com.portfolio.sql.domain.Skill",
                "id": 74,
                "level": "Proficient",
                "category": "Design",
                "skill": "APIs",
                "description": "System interfaces"
            },
            {
                "_classMap": "com.portfolio.map.domain.Skill",
                "_classSQL": "com.portfolio.sql.domain.Skill",
                "id": 75,
                "level": "Proficient",
                "category": "Design",
                "skill": "REST",
                "description": "Representational state transfer"
            },
            {
                "_classMap": "com.portfolio.map.domain.Skill",
                "_classSQL": "com.portfolio.sql.domain.Skill",
                "id": 76,
                "level": "Proficient",
                "category": "Design",
                "skill": "Queues",
                "description": "Message Queues"
            },
            {
                "_classMap": "com.portfolio.map.domain.Skill",
                "_classSQL": "com.portfolio.sql.domain.Skill",
                "id": 77,
                "level": "Proficient",
                "category": "Design",
                "skill": "Integration Patterns",
                "description": "Enterprise Integration Patterns"
            },
            {
                "_classMap": "com.portfolio.map.domain.Skill",
                "_classSQL": "com.portfolio.sql.domain.Skill",
                "id": 78,
                "level": "Proficient",
                "category": "Design",
                "skill": "Data models",
                "description": "Complex Data Models"
            },
            {
                "_classMap": "com.portfolio.map.domain.Skill",
                "_classSQL": "com.portfolio.sql.domain.Skill",
                "id": 79,
                "level": "Proficient",
                "category": "Methodology",
                "skill": "Agile",
                "description": "Scrum & Kanban"
            },
            {
                "_classMap": "com.portfolio.map.domain.Skill",
                "_classSQL": "com.portfolio.sql.domain.Skill",
                "id": 80,
                "level": "Proficient",
                "category": "Methodology",
                "skill": "Waterfall",
                "description": "Enterprise projects"
            },
            {
                "_classMap": "com.portfolio.map.domain.Skill",
                "_classSQL": "com.portfolio.sql.domain.Skill",
                "id": 81,
                "level": "Proficient",
                "category": "Soft Skills",
                "skill": "Problem Solving",
                "description": "In general & under pressure"
            },
            {
                "_classMap": "com.portfolio.map.domain.Skill",
                "_classSQL": "com.portfolio.sql.domain.Skill",
                "id": 82,
                "level": "Familiar",
                "category": "Soft Skills",
                "skill": "Collaboration",
                "description": "Within teams and external"
            },
            {
                "_classMap": "com.portfolio.map.domain.Skill",
                "_classSQL": "com.portfolio.sql.domain.Skill",
                "id": 83,
                "level": "Familiar",
                "category": "Soft Skills",
                "skill": "Business Engagement",
                "description": "And managing expectations"
            },
            {
                "_classMap": "com.portfolio.map.domain.Skill",
                "_classSQL": "com.portfolio.sql.domain.Skill",
                "id": 84,
                "level": "Familiar",
                "category": "Soft Skills",
                "skill": "Customer Service",
                "description": "Customer facing"
            },
            {
                "_classMap": "com.portfolio.map.domain.Skill",
                "_classSQL": "com.portfolio.sql.domain.Skill",
                "id": 85,
                "level": "Familiar",
                "category": "Soft Skills",
                "skill": "Communication",
                "description": "Both written and verbal"
            },
            {
                "_classMap": "com.portfolio.map.domain.Skill",
                "_classSQL": "com.portfolio.sql.domain.Skill",
                "id": 86,
                "level": "Familiar",
                "category": "Soft Skills",
                "skill": "Project Management",
                "description": "Determine and allocate tasks"
            },
            {
                "_classMap": "com.portfolio.map.domain.Skill",
                "_classSQL": "com.portfolio.sql.domain.Skill",
                "id": 87,
                "level": "Familiar",
                "category": "Soft Skills",
                "skill": "Time Management",
                "description": "Workload and deadlines"
            },
            {
                "_classMap": "com.portfolio.map.domain.Skill",
                "_classSQL": "com.portfolio.sql.domain.Skill",
                "id": 88,
                "level": "Familiar",
                "category": "Soft Skills",
                "skill": "Self-starter",
                "description": "Able to take the initiative"
            },
            {
                "_classMap": "com.portfolio.map.domain.Skill",
                "_classSQL": "com.portfolio.sql.domain.Skill",
                "id": 89,
                "level": "Familiar",
                "category": "Soft Skills",
                "skill": "Mentoring",
                "description": "For all developers"
            },
            {
                "_classMap": "com.portfolio.map.domain.Skill",
                "_classSQL": "com.portfolio.sql.domain.Skill",
                "id": 90,
                "level": "Proficient",
                "category": "Operational",
                "skill": "Productivity",
                "description": "Developer experience"
            },
            {
                "_classMap": "com.portfolio.map.domain.Skill",
                "_classSQL": "com.portfolio.sql.domain.Skill",
                "id": 91,
                "level": "Proficient",
                "category": "Operational",
                "skill": "Standards",
                "description": "When developing"
            },
            {
                "_classMap": "com.portfolio.map.domain.Skill",
                "_classSQL": "com.portfolio.sql.domain.Skill",
                "id": 92,
                "level": "Proficient",
                "category": "Operational",
                "skill": "Performance",
                "description": "In development, test and production"
            },
            {
                "_classMap": "com.portfolio.map.domain.Skill",
                "_classSQL": "com.portfolio.sql.domain.Skill",
                "id": 93,
                "level": "Proficient",
                "category": "Operational",
                "skill": "Security",
                "description": "Testing and audits"
            },
            {
                "_classMap": "com.portfolio.map.domain.Skill",
                "_classSQL": "com.portfolio.sql.domain.Skill",
                "id": 94,
                "level": "Proficient",
                "category": "Environments",
                "skill": "Linux",
                "description": "Debian based distros"
            },
            {
                "_classMap": "com.portfolio.map.domain.Skill",
                "_classSQL": "com.portfolio.sql.domain.Skill",
                "id": 95,
                "level": "Proficient",
                "category": "Environments",
                "skill": "Windows",
                "description": "Including WSL"
            },
            {
                "_classMap": "com.portfolio.map.domain.Skill",
                "_classSQL": "com.portfolio.sql.domain.Skill",
                "id": 96,
                "level": "Familiar",
                "category": "Office",
                "skill": "Microsoft Word",
                "description": "With document macros"
            },
            {
                "_classMap": "com.portfolio.map.domain.Skill",
                "_classSQL": "com.portfolio.sql.domain.Skill",
                "id": 97,
                "level": "Familiar",
                "category": "Office",
                "skill": "Microsoft Excel",
                "description": "For uploading/downloading data"
            },
            {
                "_classMap": "com.portfolio.map.domain.Skill",
                "_classSQL": "com.portfolio.sql.domain.Skill",
                "id": 98,
                "level": "Familiar",
                "category": "Office",
                "skill": "Microsoft PowerPoint",
                "description": "Presentations"
            },
            {
                "_classMap": "com.portfolio.map.domain.Skill",
                "_classSQL": "com.portfolio.sql.domain.Skill",
                "id": 99,
                "level": "Familiar",
                "category": "Tools",
                "skill": "Eclipse IDE",
                "description": "Using numerous plugins"
            },
            {
                "_classMap": "com.portfolio.map.domain.Skill",
                "_classSQL": "com.portfolio.sql.domain.Skill",
                "id": 100,
                "level": "Familiar",
                "category": "Tools",
                "skill": "JetBrains",
                "description": "IntelliJ, WebStorm and PyCharm"
            },
            {
                "_classMap": "com.portfolio.map.domain.Skill",
                "_classSQL": "com.portfolio.sql.domain.Skill",
                "id": 101,
                "level": "Familiar",
                "category": "Tools",
                "skill": "Visual Studio Code",
                "description": "Using numerous plugins"
            },
            {
                "_classMap": "com.portfolio.map.domain.Skill",
                "_classSQL": "com.portfolio.sql.domain.Skill",
                "id": 102,
                "level": "Familiar",
                "category": "Tools",
                "skill": "PL/SQL Developer",
                "description": "For Oracle DB"
            },
            {
                "_classMap": "com.portfolio.map.domain.Skill",
                "_classSQL": "com.portfolio.sql.domain.Skill",
                "id": 103,
                "level": "Familiar",
                "category": "Tools",
                "skill": "SoapUI",
                "description": "Testing web services"
            },
            {
                "_classMap": "com.portfolio.map.domain.Skill",
                "_classSQL": "com.portfolio.sql.domain.Skill",
                "id": 104,
                "level": "Familiar",
                "category": "Tools",
                "skill": "Apache JMeter",
                "description": "Performance testing"
            },
            {
                "_classMap": "com.portfolio.map.domain.Skill",
                "_classSQL": "com.portfolio.sql.domain.Skill",
                "id": 105,
                "level": "Familiar",
                "category": "Tools",
                "skill": "Postman",
                "description": "Testing REST APIs"
            }
        ]
    );

    return (
        <div id="skillsCard" className="card">
            <div id="skillsToolbar">
            </div>
            <table
                id="skillsTable"
                data-toolbar="#skillsToolbar"
                data-classes="table table-bordered table-hover table-striped"
                data-buttons="skillsButtons"
                data-buttons-class="link"
                data-filter-control="true"
                data-pagination="true"
                data-page-size="10"
                data-page-list="[10, 20, 30, 40, all]"
                data-show-footer="true"
                data-toggle="table">
                <thead>
                <tr>
                    <th data-field="level" data-sortable="true" data-filter-control="select">Level</th>
                    <th data-field="category" data-sortable="true" data-filter-control="select">Category</th>
                    <th data-field="skill" data-sortable="true" data-filter-control="input">Skill</th>
                    <th data-field="description" data-sortable="true" data-filter-control="input">Description</th>
                </tr>
                </thead>
                <tbody>
                {data.map(skill => (
                <tr>
                    <td>{ skill.level }</td>
                    <td>{ skill.category }</td>
                    <td>{ skill.skill }</td>
                    <td>{ skill.description }</td>
                </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default Skills;
