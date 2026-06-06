// ============================================================
// SPRINT DAYS
// ============================================================
const sprintDays = [
  { day: 1, title: "Exam Map + Baseline", focus: "Pruefungsaufbau, Skill-Gewichte, erstes Diagnose-Quiz.", tasks: ["Microsoft Study Guide lesen und eigene Schwachstellen markieren", "John Savill AZ-305 Study Cram in 1.25x bis Identity/Governance", "20 Fragen Baseline: Fehler in Decision Log schreiben"] },
  { day: 2, title: "Governance, RBAC, Policy", focus: "Management Groups, Subscriptions, Policy, Locks, Tags.", tasks: ["Landing Zone Hierarchie zeichnen", "RBAC vs Entra Rollen vs PIM abgrenzen", "Policy Initiative fuer Compliance skizzieren"] },
  { day: 3, title: "Monitoring + Secrets", focus: "Azure Monitor, Log Analytics, App Insights, Key Vault.", tasks: ["Log Routing: Diagnostic Settings, Event Hub, Storage, LA Workspace", "Key Vault Zugriff: RBAC vs Access Policies verstehen", "10 Monitoring Cases beantworten"] },
  { day: 4, title: "Networking Core", focus: "Hub-Spoke, VPN, ExpressRoute, Private Link, DNS.", tasks: ["Hybrid Connectivity Entscheidungsbaum bauen", "Private Endpoint vs Service Endpoint erklaeren", "Load Balancer, App Gateway, Front Door vergleichen"] },
  { day: 5, title: "Compute Design", focus: "VMs, App Service, AKS, Functions, Batch.", tasks: ["Compute Matrix: VM vs Container vs Serverless", "Scale Sets, Availability Sets, Zones vergleichen", "App Config und Deployment Optionen wiederholen"] },
  { day: 6, title: "Storage Decisions", focus: "Blob, Files, Queues, Tables, Redundanz, Access Tiers.", tasks: ["LRS/ZRS/GRS/GZRS mit RPO/RTO vergleichen", "Lifecycle Management und Immutable Storage lernen", "Storage Account Performance/Cost Cases loesen"] },
  { day: 7, title: "Data Platforms", focus: "Azure SQL, MI, PostgreSQL, Cosmos DB, Cache.", tasks: ["SQL DB vs Managed Instance vs SQL on VM vergleichen", "Cosmos Consistency und Partitioning wiederholen", "Redis Cache und Messaging-Entscheidungen ueben"] },
  { day: 8, title: "Business Continuity", focus: "Backup, ASR, HA, DR, Region Pairs, RTO/RPO.", tasks: ["RTO/RPO fuer 5 Workloads ableiten", "Backup fuer VM, SQL, Blob, Files vergleichen", "ASR und Cross-Region Patterns lernen"] },
  { day: 9, title: "Migration", focus: "CAF, Azure Migrate, DMS, Storage Migration.", tasks: ["CAF Strategy/Plan/Ready/Adopt/Manage zuordnen", "Rehost/Replatform/Refactor Cases ueben", "Database Migration Service Entscheidung merken"] },
  { day: 10, title: "Architecture Frameworks", focus: "Well-Architected, CAF, Cost, Reliability, Security.", tasks: ["WAF Pillars auf echte Kunden-Cases anwenden", "Cost Management Empfehlungen trainieren", "Security Baseline und Defender for Cloud einordnen"] },
  { day: 11, title: "Practice Exam 1", focus: "Timed Mode. Kein Nachschauen waehrend der Runde.", tasks: ["Volles Practice Exam (Exam-Modus) schreiben", "Alle falschen Antworten kategorisieren", "Top 5 Wissensluecken direkt nachlernen"] },
  { day: 12, title: "Weakness Attack", focus: "Nur Fehler, keine bequemen Themen.", tasks: ["Schwaechste Domain 2 Stunden drillen (Analytics checken)", "30 gemischte Case-Fragen", "Alle Decision Cards einmal laut erklaeren"] },
  { day: 13, title: "Practice Exam 2", focus: "Stabilitaet pruefen. Ziel: 80%+.", tasks: ["Volles Practice Exam schreiben", "Case Study Timing ueben", "Exam Notes auf 1 Seite reduzieren"] },
  { day: 14, title: "Exam Day", focus: "Leicht wiederholen, ruhig bleiben, keine Dumps.", tasks: ["Study Cram Zusammenfassung anschauen", "1-Seiten-Notes und Decision Cards lesen", "Pruefung schreiben, danach Team-Demo vorbereiten"] },
];

// ============================================================
// DECISION CARDS (32 total)
// ============================================================
const decisionCards = [
  { title: "Front Door vs Application Gateway", body: "Front Door fuer globales HTTP(S), Anycast, WAF am Edge und Multi-Region Routing. Application Gateway fuer regionales Layer-7 Routing, WAF und VNet-nahe Apps.", tags: ["network", "waf", "routing"] },
  { title: "Traffic Manager vs Load Balancer", body: "Traffic Manager ist DNS-basiert und global. Load Balancer ist Layer 4 fuer TCP/UDP, regional oder global. Nicht fuer HTTP-Pfadregeln.", tags: ["network", "ha"] },
  { title: "Private Endpoint vs Service Endpoint", body: "Private Endpoint gibt dem PaaS-Dienst eine private IP im VNet. Service Endpoint haelt die Ziel-IP oeffentlich, beschraenkt aber Zugriff auf dein VNet.", tags: ["security", "network"] },
  { title: "Azure SQL DB vs Managed Instance", body: "SQL DB fuer moderne PaaS Apps mit weniger Instanzfeatures. Managed Instance wenn SQL Server Kompatibilitaet, Agent, Cross-DB oder Lift-and-Shift wichtig ist.", tags: ["data", "migration"] },
  { title: "LRS, ZRS, GRS, GZRS", body: "LRS: Guenstig in einem Datacenter. ZRS: Schuetzt zonal. GRS: Repliziert in zweite Region. GZRS: Zone plus Geo kombiniert.", tags: ["storage", "dr"] },
  { title: "Backup vs Site Recovery", body: "Backup schuetzt Daten und Wiederherstellungspunkte. Site Recovery orchestriert Failover ganzer Workloads fuer Disaster Recovery.", tags: ["bcdr", "rto"] },
  { title: "Policy vs Blueprint vs Landing Zone", body: "Policy erzwingt Regeln. Blueprints sind Legacy. Landing Zones sind Zielarchitektur mit Governance, Connectivity, Identity und Management.", tags: ["governance"] },
  { title: "RBAC vs Entra ID Rollen", body: "Azure RBAC steuert Zugriff auf Azure Ressourcen. Entra Rollen steuern Directory und Identity-Aufgaben wie User, Groups, App Registrations.", tags: ["identity", "rbac"] },
  { title: "Log Analytics vs Application Insights", body: "Log Analytics ist zentraler Log- und Query-Arbeitsbereich (KQL). Application Insights ist APM fuer Apps, Performance, Dependencies und User-Flows.", tags: ["monitoring"] },
  { title: "Functions vs Logic Apps", body: "Functions fuer Code und event-driven Compute. Logic Apps fuer Workflows, Connectoren und Integration mit wenig Code.", tags: ["compute", "integration"] },
  { title: "Service Bus vs Event Grid", body: "Service Bus fuer Enterprise Messaging, Queues, Topics und Guaranteed Delivery. Event Grid fuer Event-Notification und reaktive Architektur.", tags: ["messaging"] },
  { title: "Availability Sets vs Zones", body: "Availability Sets schuetzen gegen Rack/Update-Domain-Fehler. Zones schuetzen gegen Ausfall einer ganzen Zone innerhalb der Region.", tags: ["compute", "ha"] },
  { title: "Azure Firewall vs NSG", body: "NSG ist Layer 3/4 Filterung auf Subnet/NIC-Ebene. Azure Firewall ist L3-L7 Stateful mit FQDN-Regeln, IDPS und TLS-Inspektion. Beide ergaenzen sich.", tags: ["network", "security"] },
  { title: "Managed Identity vs Service Principal", body: "Managed Identity: Von Azure verwaltet, kein Secret Management, nur fuer Azure-native Workloads. Service Principal: Flexibler, auch On-Premises/extern, erfordert manuelles Secret-Management.", tags: ["identity", "security"] },
  { title: "Entra ID B2B vs B2C", body: "B2B: Partner/externe Mitarbeiter nutzen ihr eigenes Firmen-Konto fuer interne Azure-Ressourcen. B2C: Customer Identity Plattform fuer public-facing Apps mit Millionen Endnutzern.", tags: ["identity"] },
  { title: "Event Hub vs Service Bus vs Event Grid", body: "Event Hub: Hochvolumige Datenstroeme, Telemetrie, Kafka-kompatibel. Service Bus: Enterprise Messaging, Queues/Topics, Guaranteed Delivery, DLQ. Event Grid: Reaktives Event-Routing fuer Azure-Service-Events.", tags: ["messaging", "integration"] },
  { title: "VNet Peering vs VPN Gateway", body: "VNet Peering: Direkte, niedrige Latenz innerhalb Azure, nicht transitiv, kein Gateway. VPN Gateway: On-Prem oder VNet-zu-VNet ueber IPSec, schlechterer Durchsatz, transitiv via Firewall.", tags: ["network"] },
  { title: "Cosmos DB Consistency Levels", body: "Strong: Linearisierbar, hoechste Latenz. Bounded Staleness: Max. Verzoegerung konfigurierbar. Session: Eigene Writes sichtbar (Standard). Consistent Prefix: Keine Out-of-Order. Eventual: Beste Latenz.", tags: ["data", "cosmos"] },
  { title: "Reserved vs On-demand vs Spot VMs", body: "On-demand: Maximale Flexibilitaet, hoechste Kosten. Reserved (1/3 Jahre): Bis 72% Rabatt fuer stabile Workloads. Spot: Bis 90% guenstiger, kein SLA, jederzeit abbrechbar — ideal fuer Batch.", tags: ["compute", "cost"] },
  { title: "Azure DNS vs Private DNS Zone", body: "Azure DNS: Oeffentlicher DNS-Dienst fuer Public Domains. Private DNS Zone: Aufloessung nur innerhalb VNets, Auto-Registration von VM-Namen, Standard fuer Private Endpoints.", tags: ["network", "dns"] },
  { title: "App Service Plan Tiers", body: "Free/Shared: Test, kein SLA. Basic: Dedicated, kein Autoscaling. Standard: Autoscaling, Deployment Slots, SSL. Premium: VNet Integration, mehr Slots. Isolated: Privates VNet, dedizierte Infrastruktur.", tags: ["compute", "paas"] },
  { title: "Azure Synapse vs Azure Databricks", body: "Synapse: Unified Analytics, SQL DWH, Pipelines und Spark. Databricks: ML/Data Science, Spark-optimiert, kollaborative Notebooks, MLflow. Haeufig ergaenzend eingesetzt.", tags: ["data", "analytics"] },
  { title: "Azure API Management", body: "APIM ist ein Gateway fuer APIs: Rate Limiting, Auth, Caching, Transformation, Developer Portal. Sitzt vor Backend-Services und zentralisiert API-Governance.", tags: ["integration", "api"] },
  { title: "HA: Availability Set vs Zone vs Multi-Region", body: "Availability Set: Schutz gegen Rack/Update-Domain (99.95%). Zone: Schutz gegen Datacenter-Ausfall (99.99%). Multi-Region: Schutz gegen Region-Ausfall via Site Recovery oder Traffic Manager.", tags: ["compute", "ha", "bcdr"] },
  { title: "Defender for Cloud vs Microsoft Sentinel", body: "Defender for Cloud: CSPM und CWPP, Secure Score, Workload-Schutz. Sentinel: SIEM/SOAR, Bedrohungserkennung, Incident Management, Automation und Threat Intelligence.", tags: ["security"] },
  { title: "Backup Vault vs Recovery Services Vault", body: "Recovery Services Vault: VMs, SQL in VMs, SAP HANA, Azure Files. Backup Vault (neuer): Azure Blobs, Disks, PostgreSQL, Kubernetes. Fuer neue Workloads Backup Vault bevorzugen.", tags: ["bcdr", "backup"] },
  { title: "Key Vault: RBAC vs Access Policies", body: "Access Policies (Legacy): Pro-Vault, breit, schwer auditierbar. Azure RBAC (empfohlen): Fine-grained Rollen (Key Vault Secrets Officer etc.), einheitliches IAM, Conditional Access moeglich.", tags: ["security", "identity"] },
  { title: "SQL: Auto-Failover Group vs Geo-Replication", body: "Active Geo-Replication: Manuelles Failover, bis zu 4 lesbare Sekundaer-DBs, DB-Level. Auto-Failover Group: Automatisches Failover, einheitlicher Listener-Endpoint, Server-Level, besser fuer Zero-Touch DR.", tags: ["data", "bcdr", "dr"] },
  { title: "Azure Virtual WAN vs Hub-Spoke manuell", body: "Virtual WAN: Managed Hub, Any-to-Any Konnektivitaet, integriertes Routing/VPN/ER, ideal fuer viele Niederlassungen. Manuell Hub-Spoke: Mehr Kontrolle, guenstiger bei wenigen Standorten.", tags: ["network", "hybrid"] },
  { title: "Azure Data Factory vs Logic Apps", body: "ADF: Datenintegration und ETL-Pipelines, Batch-Fokus, Datasets. Logic Apps: Prozessautomatisierung, 400+ Konnektoren, event-getrieben, Workflow-fokussiert.", tags: ["integration", "data"] },
  { title: "Azure Front Door: Standard vs Premium", body: "Standard: CDN, WAF, globales HTTP-Routing, Custom Domains. Premium: Zusaetzlich Private Link zu Backends (kein Public Access), Bot Protection, Security Reports.", tags: ["network", "waf"] },
  { title: "Container Apps vs AKS vs Container Instances", body: "Container Instances: Einfachste Option, einzelne Container ohne Orchestrierung. Container Apps: Serverless Kubernetes fuer Microservices ohne Cluster-Management. AKS: Voller Kubernetes-Cluster fuer komplexe Workloads.", tags: ["compute", "containers"] },
];

// ============================================================
// QUESTIONS (80 total)
// ============================================================
const questions = [
  // --- GOVERNANCE ---
  { domain: "Governance", text: "Ein Konzern hat mehrere Tochterfirmen. Jede Tochter braucht eigene Budgets, zentrale Security Policies und einheitliches Tagging. Was empfiehlst du?", answers: ["Eine einzelne Subscription mit Resource Groups pro Tochterfirma", "Management Groups je Tochterfirma, darunter Subscriptions, plus Azure Policy Initiatives", "Nur Tags auf Resource Groups und monatlicher manueller Review", "Separate Entra Tenants fuer jede Applikation"], correct: 1, explanation: "Management Groups erlauben Governance ueber mehrere Subscriptions. Policy Initiatives erzwingen Compliance und Tagging zentral." },
  { domain: "Governance", text: "Eine Policy soll automatisch eine Diagnoseeinstellung auf neu erstellte Storage Accounts anwenden. Welcher Policy-Effekt ist geeignet?", answers: ["Deny", "DeployIfNotExists", "Audit", "Modify"], correct: 1, explanation: "DeployIfNotExists kann nach Erstellen einer Ressource automatisch weitere Ressourcen anlegen oder konfigurieren, z.B. Diagnoseeinstellungen." },
  { domain: "Governance", text: "Ein kritisches Production-VNet soll nicht versehentlich geloescht werden koennen, aber Konfigurationsaenderungen muessen moeglich bleiben. Welche Lock-Stufe?", answers: ["ReadOnly Lock", "Delete Lock", "RBAC Owner entfernen", "Azure Policy Deny"], correct: 1, explanation: "Ein Delete Lock verhindert das Loeschen, erlaubt aber alle Lese- und Konfigurationsoperationen." },
  { domain: "Governance", text: "Du willst benachrichtigt werden, wenn Kosten einer Subscription 80% des Monatsbudgets uebersteigen. Was verwendest du?", answers: ["Azure Advisor", "Cost Management Budget mit Alert", "Azure Policy", "Log Analytics Alert Rule"], correct: 1, explanation: "Cost Management Budgets haben integrierte Alerts bei definierten Schwellenwerten." },
  { domain: "Governance", text: "Eine Policy wird auf Management Group Ebene zugewiesen. Wo gilt sie automatisch?", answers: ["Nur auf dieser Management Group direkt", "Auf allen Kind-Subscriptions und Kind-Management Groups", "Nur auf explizit gewaehlten Subscriptions", "Nur auf Resource Groups"], correct: 1, explanation: "Policies auf Management Group Ebene werden vererbt an alle untergeordneten Management Groups und Subscriptions." },
  { domain: "Governance", text: "Alle Ressourcen in einer Subscription sollen automatisch das Tag 'CostCenter' vom Subscription-Tag erben. Wie wird das erzwungen?", answers: ["Manuell bei jeder Ressource setzen", "Azure Policy: Inherit a tag from the subscription", "Azure Blueprint", "ARM Template default"], correct: 1, explanation: "Die eingebaute Policy 'Inherit a tag from the subscription' kopiert Tags automatisch auf neue Ressourcen." },
  { domain: "Governance", text: "Eine Firma braucht strikte Isolation zwischen Test- und Produktionsumgebung auf Netzwerk-, IAM- und Billing-Ebene. Empfohlene Struktur?", answers: ["Separate Resource Groups", "Separate Subscriptions pro Umgebung", "Separate VNets mit Peering", "Separate Tags"], correct: 1, explanation: "Separate Subscriptions bieten vollstaendige Isolation auf Billing-, IAM- und Netzwerkebene." },
  { domain: "Governance", text: "Eine spezifische Ressource soll von einer Policy ausgenommen werden, ohne die Policy zu deaktivieren. Was nutzt du?", answers: ["Policy Assignment loeschen", "Policy Exemption erstellen", "RBAC Owner Rolle zuweisen", "Resource Lock setzen"], correct: 1, explanation: "Policy Exemptions erlauben Ausnahmen fuer bestimmte Ressourcen ohne die Policy fuer alle aufzuheben." },

  // --- IDENTITY ---
  { domain: "Identity", text: "Admins sollen nur zeitlich begrenzt privilegierte Rechte bekommen und Genehmigung brauchen. Welche Loesung passt?", answers: ["Azure Policy", "Microsoft Entra Privileged Identity Management", "Storage Account Access Keys", "Azure Monitor Action Groups"], correct: 1, explanation: "PIM ist fuer Just-in-Time-Privilegien, Approval, MFA und Audit von privilegierten Rollen." },
  { domain: "Identity", text: "Eine Azure Function braucht Zugriff auf Key Vault Secrets, ohne Credentials im Code zu speichern. Wie geht das am sichersten?", answers: ["Connection String in App Settings", "System-assigned Managed Identity + Key Vault RBAC", "Service Principal mit Passwort", "Shared Access Signature"], correct: 1, explanation: "Managed Identity wird von Azure verwaltet. Kein Secret im Code oder Config noetig." },
  { domain: "Identity", text: "Benutzer sollen bei Zugriff auf sensitive Apps aus unbekannten Netzwerken MFA durchfuehren. Was konfigurierst du?", answers: ["Azure Policy", "Conditional Access Policy", "RBAC Conditional Permission", "PIM Just-in-Time"], correct: 1, explanation: "Conditional Access erlaubt risikobasierte Zugriffssteuerung, z.B. MFA bei unbekanntem Standort." },
  { domain: "Identity", text: "Externe Partnerunternehmen sollen auf interne Azure Ressourcen zugreifen, ohne ein neues Konto in deinem Tenant. Welche Loesung?", answers: ["Entra ID B2C", "Entra ID B2B Guest Access", "Neue lokale Konten erstellen", "AD FS Vertrauensstellung"], correct: 1, explanation: "B2B Guest Access erlaubt externen Partnern, ihr eigenes Firmen-Konto zu verwenden." },
  { domain: "Identity", text: "Ein Team soll VMs nur starten und stoppen duerfen, aber keine anderen VM-Operationen. Wie implementierst du das?", answers: ["Owner Rolle zuweisen", "Custom RBAC Rolle mit spezifischen VM-Aktionen", "Contributor auf VMs zuweisen", "Azure Policy Deny fuer alle anderen Aktionen"], correct: 1, explanation: "Custom RBAC Rollen erlauben praezise Aktionen wie Microsoft.Compute/virtualMachines/start/action." },
  { domain: "Identity", text: "Benutzer sollen ihr lokales AD-Passwort auch fuer Azure Dienste verwenden, ohne ADFS zu betreiben. Welche Option?", answers: ["Pass-through Authentication oder Password Hash Sync", "Federated Identity mit ADFS zwingend erforderlich", "Entra B2B", "Nur neue Cloud-Only Konten erstellen"], correct: 0, explanation: "PHS und PTA sind ADFS-Alternativen fuer Hybrid Identity ohne Federation Server." },
  { domain: "Identity", text: "Quartalsweise soll automatisch ueberprueft werden, ob externe Gastbenutzer noch Zugriff benoetigen. Was verwendest du?", answers: ["Manuelles Audit Excel", "Entra ID Access Reviews", "Azure Policy", "PIM Access Review"], correct: 1, explanation: "Access Reviews automatisieren periodische Zugriffsueberpr-ungen und koennen automatisch ablaufen." },
  { domain: "Identity", text: "Eine On-Premises Anwendung muss sich bei Azure APIs authentifizieren. Was ist die passende Loesung?", answers: ["System-assigned Managed Identity", "Service Principal mit Zertifikat oder Secret", "Storage Account Key", "Public IP-basierte Whitelist"], correct: 1, explanation: "Managed Identity funktioniert nur fuer Azure-native Dienste. On-Premises braucht einen Service Principal." },

  // --- MONITORING ---
  { domain: "Monitoring", text: "Eine Web-App braucht End-to-End Telemetrie, Dependency Tracking und Performance Analyse. Was ist am passendsten?", answers: ["Application Insights", "Azure Policy", "Traffic Manager", "Azure Files"], correct: 0, explanation: "Application Insights ist APM fuer Anwendungen, inklusive Dependencies, Requests und Performance." },
  { domain: "Monitoring", text: "Azure Resource Logs sollen gleichzeitig in Log Analytics, einen Event Hub und ein Storage Account gesendet werden. Was verwendest du?", answers: ["Azure Monitor Action Group", "Diagnostic Settings", "Azure Activity Log Export", "Application Insights SDK"], correct: 1, explanation: "Diagnostic Settings koennen gleichzeitig an mehrere Ziele weiterleiten: LA Workspace, Event Hub, Storage." },
  { domain: "Monitoring", text: "Automatisch E-Mail und Teams-Webhook ausloesen, wenn VM CPU > 90% fuer 5 Minuten. Was konfigurierst du?", answers: ["Log Analytics Query allein", "Metric Alert + Action Group", "Azure Advisor Alert", "Policy Compliance Alert"], correct: 1, explanation: "Metric Alerts reagieren auf Schwellenwerte. Action Groups definieren die Benachrichtigungskanale." },
  { domain: "Monitoring", text: "Du willst wissen, ob Azure als Platform gerade regionale Probleme hat. Was schaust du an?", answers: ["Resource Health (spezifische Ressource)", "Azure Service Health - Service Issues", "Azure Advisor", "Network Watcher"], correct: 1, explanation: "Service Health zeigt Azure-Platform-Probleme (Incidents, geplante Wartungen) pro Region und Service." },
  { domain: "Monitoring", text: "Logs aus mehreren Services sollen zentral mit KQL analysiert werden. Was ist die Kernkomponente?", answers: ["Log Analytics Workspace", "Availability Set", "Azure Container Registry", "Azure Virtual WAN"], correct: 0, explanation: "Log Analytics Workspace speichert Logs und ermoeglicht KQL-Abfragen. Ziel fuer Diagnostic Settings." },
  { domain: "Monitoring", text: "Du willst herausfinden, wer eine Netzwerksicherheitsgruppe geloescht hat und wann. Was verwendest du?", answers: ["Log Analytics Workspace", "Azure Activity Log", "Network Watcher", "Azure Advisor"], correct: 1, explanation: "Der Activity Log protokolliert alle Control-Plane-Aktionen inkl. wer was wann geaendert hat." },

  // --- NETWORK ---
  { domain: "Network", text: "Eine globale Web-App soll User automatisch zum naechsten gesunden Endpoint routen und WAF am Edge nutzen. Welche Loesung?", answers: ["Azure Front Door", "Azure Load Balancer Basic", "Azure Bastion", "Azure DNS Private Resolver"], correct: 0, explanation: "Front Door bietet globales HTTP(S)-Routing, Anycast, Health Probes und WAF am Edge." },
  { domain: "Network", text: "Ein PaaS Storage Account soll privat aus einem VNet erreichbar sein, keine oeffentliche Erreichbarkeit. Was empfiehlst du?", answers: ["Private Endpoint", "Public IP mit NSG", "Traffic Manager", "Availability Set"], correct: 0, explanation: "Private Endpoint bindet den PaaS-Dienst ueber eine private IP ins VNet ein." },
  { domain: "Network", text: "On-premises und Azure brauchen private, dedizierte Konnektivitaet mit stabiler Bandbreite. Was ist typischerweise richtig?", answers: ["ExpressRoute", "Azure Front Door", "Public Load Balancer", "Blob Lifecycle Management"], correct: 0, explanation: "ExpressRoute bietet private Konnektivitaet ueber Provider statt Site-to-Site VPN ueber Internet." },
  { domain: "Network", text: "Zwei VNets in derselben Region sollen mit niedrigster Latenz und hoechstem Durchsatz kommunizieren. Was ist effizienter?", answers: ["VNet-zu-VNet VPN Gateway", "VNet Peering", "ExpressRoute", "Azure Front Door"], correct: 1, explanation: "VNet Peering ist direkt im Azure-Backbone und hat keine Gateway-Latenz." },
  { domain: "Network", text: "VMs sollen sicher per RDP/SSH administriert werden, ohne oeffentliche IPs oder offene Ports in NSGs. Was empfiehlst du?", answers: ["Public IP + NSG RDP-Regel", "Azure Bastion", "Site-to-Site VPN fuer jeden Admin", "Azure Serial Console"], correct: 1, explanation: "Azure Bastion ermoeglicht RDP/SSH direkt im Browser ueber TLS, ohne Public IP oder open ports." },
  { domain: "Network", text: "Du brauchst Layer-7 Applikationsregeln, IDPS, TLS-Inspektion und zentrales Logging fuer alle ausgehenden Verbindungen. Was passt?", answers: ["NSG mit Application Security Groups", "Azure Firewall Premium", "Load Balancer mit NSG", "Front Door WAF"], correct: 1, explanation: "Azure Firewall Premium bietet L7-Filterung, FQDN-Regeln, IDPS und TLS-Inspektion." },
  { domain: "Network", text: "In einer NSG-Regel soll Zugriff auf alle Azure Storage Services erlaubt werden, ohne jede IP zu pflegen. Was nutzt du?", answers: ["Custom IP-Ranges manuell pflegen", "Service Tag 'Storage'", "Application Security Group", "VNet Service Endpoint Policy"], correct: 1, explanation: "Service Tags wie 'Storage' repraesentieren automatisch aktualisierte IP-Bereiche des jeweiligen Azure Services." },
  { domain: "Network", text: "Private Endpoints sollen automatisch mit korrekten DNS-Namen aufgeloest werden, ohne oeffentliche DNS-Aenderungen. Was ist noetig?", answers: ["Oeffentliche DNS-Zone aendern", "Private DNS Zone mit VNet-Link und Auto-Registration", "Azure Traffic Manager", "Custom DNS-Server auf jeder VM"], correct: 1, explanation: "Private DNS Zones werden mit dem VNet verlinkt und loesen Private Endpoint DNS-Namen auf." },
  { domain: "Network", text: "Ein globales Unternehmen mit 50+ Standorten braucht VPN-Verbindungen mit zentralem Routing und minimaler Komplexitaet. Was empfiehlst du?", answers: ["Manuelle Hub-Spoke mit VPN Gateways", "Azure Virtual WAN", "Separates Peering jeder Niederlassung", "Site-to-Site VPN direkt zwischen allen Standorten"], correct: 1, explanation: "Virtual WAN bietet managed Hub mit Any-to-Any Konnektivitaet und zentralem Routing." },
  { domain: "Network", text: "Du willst untersuchen, ob Netzwerkverkehr zwischen zwei VMs blockiert wird und welche NSG-Regel verantwortlich ist. Welches Tool?", answers: ["Azure Monitor Metrics", "Network Watcher IP Flow Verify", "Azure Advisor", "Log Analytics Query"], correct: 1, explanation: "IP Flow Verify in Network Watcher simuliert Pakete und zeigt welche NSG-Regel sie erlaubt oder blockiert." },

  // --- STORAGE ---
  { domain: "Storage", text: "Daten sollen zonal hochverfuegbar sein, aber nicht in eine zweite Region repliziert werden. Welche Redundanz?", answers: ["LRS", "ZRS", "GRS", "RA-GRS"], correct: 1, explanation: "ZRS repliziert synchron ueber Availability Zones innerhalb einer Region." },
  { domain: "Storage", text: "Blob Daten sollen nach 30 Tagen automatisch in Cool und nach 180 Tagen in Archive wechseln. Was nutzt du?", answers: ["Lifecycle Management", "Azure Site Recovery", "PIM", "Availability Zones"], correct: 0, explanation: "Lifecycle Management verschiebt Blob-Daten regelbasiert zwischen Access Tiers." },
  { domain: "Storage", text: "100 TB lokale Daten sollen in Azure Storage migriert werden, aber die Internetverbindung ist zu langsam. Was empfiehlst du?", answers: ["AzCopy ueber Internet", "Azure Data Box Offline-Migration", "Azure Migrate Online Agent", "Robocopy mit ExpressRoute"], correct: 1, explanation: "Azure Data Box ist ein physisches Geraet fuer den Offline-Transfer grosser Datenmengen." },
  { domain: "Storage", text: "Einem externen Partner soll fuer 7 Tage nur Lesezugriff auf einen bestimmten Blob-Container gewaehrt werden. Wie?", answers: ["Storage Account Key teilen", "Shared Access Signature (SAS) mit begrenztem Scope und Ablaufdatum", "Entra ID Gastbenutzer anlegen", "Public Access auf Container aktivieren"], correct: 1, explanation: "SAS-Token sind zeitlich begrenzt und koennen auf Scope (Container/Blob) und Berechtigungen eingeschraenkt werden." },
  { domain: "Storage", text: "Compliance verlangt, dass Logs fuer 7 Jahre unveraenderlich gespeichert werden (WORM). Welche Storage-Funktion?", answers: ["Soft Delete", "Blob Versioning", "Immutable Blob Storage mit Retention Policy", "Azure Backup mit langfristiger Aufbewahrung"], correct: 2, explanation: "Immutable Storage mit Time-Based Retention verhindert Loeschen und Aendern fuer die definierte Aufbewahrungszeit." },
  { domain: "Storage", text: "Legacy-Applikationen brauchen einen gemeinsam genutzten Dateispeicher per SMB-Protokoll. Was passt?", answers: ["Azure Blob Storage", "Azure Files", "Azure Table Storage", "Azure Queue Storage"], correct: 1, explanation: "Azure Files bietet SMB/NFS-Shares, die direkt in Betriebssysteme eingebunden werden koennen." },

  // --- DATA ---
  { domain: "Data", text: "Eine bestehende SQL Server App nutzt SQL Agent und Cross-Database Queries. Lift-and-Shift zu PaaS. Was passt?", answers: ["Azure SQL Database Single Database", "Azure SQL Managed Instance", "Azure Table Storage", "Azure Cache for Redis"], correct: 1, explanation: "Managed Instance bietet hoehere SQL Server Kompatibilitaet fuer Lift-and-Shift Szenarien." },
  { domain: "Data", text: "Eine globale App braucht NoSQL, niedrige Latenz und Multi-Region Writes. Welche Plattform?", answers: ["Azure Cosmos DB", "Azure SQL on VM", "Azure Files", "Log Analytics"], correct: 0, explanation: "Cosmos DB ist fuer global verteilte NoSQL Workloads mit Multi-Region Write-Optionen konzipiert." },
  { domain: "Data", text: "Eine global verteilte App braucht maximale Verfuegbarkeit und akzeptiert leicht veraltete Lesedaten. Welche Cosmos DB Consistency?", answers: ["Strong", "Bounded Staleness", "Session", "Eventual"], correct: 3, explanation: "Eventual Consistency maximiert Verfuegbarkeit und Schreibdurchsatz auf Kosten maessiger Aktualitaet." },
  { domain: "Data", text: "50 SQL-Datenbanken haben sehr unterschiedliche, nicht-parallele Peak-Nutzung. Wie werden Kosten optimiert?", answers: ["50 separate SQL Databases mit Maximum DTU/vCore", "SQL Elastic Pool mit geteilten Ressourcen", "SQL Managed Instance", "Azure Table Storage"], correct: 1, explanation: "Elastic Pools teilen Compute-Ressourcen ueber mehrere DBs - ideal wenn Peaks nicht gleichzeitig auftreten." },
  { domain: "Data", text: "Eine Datenbank wurde um 14:30 Uhr mit falschen Daten befuellt. Wiederherstellung auf 14:00 Uhr noetig. Was verwendest du?", answers: ["Geo-Restore", "Point-in-Time Restore (PITR)", "Long-term Retention Restore", "Database Copy"], correct: 1, explanation: "PITR stellt die Datenbank auf jeden Zeitpunkt innerhalb des Retention-Fensters wieder her." },
  { domain: "Data", text: "Eine Cosmos DB Collection hat 90% der Anfragen auf eine Partition konzentriert (Hot Partition). Was ist die Loesung?", answers: ["Mehr Request Units kaufen", "Partition Key ueberarbeiten fuer gleichmaessige Verteilung", "Consistency Level senken", "Multi-Region aktivieren"], correct: 1, explanation: "Hot Partitions entstehen durch einen schlecht gewahlten Partition Key. Die Loesung ist ein cardinalitaetsreicherer Key." },
  { domain: "Data", text: "Ein Data Science Team braucht Spark-Verarbeitung, ML-Workloads und kollaborative Notebooks. Was empfiehlst du?", answers: ["Azure SQL Database", "Azure Synapse Analytics (SQL-Fokus)", "Azure Databricks", "Azure Stream Analytics"], correct: 2, explanation: "Databricks ist Spark-optimiert, hat starke ML-Integration (MLflow) und eignet sich besonders fuer Data Science Teams." },

  // --- BCDR ---
  { domain: "BCDR", text: "VM Workloads sollen bei Regionsausfall orchestriert in eine zweite Region failovern. Welche Loesung?", answers: ["Azure Backup", "Azure Site Recovery", "Azure Advisor", "Azure App Configuration"], correct: 1, explanation: "Azure Site Recovery ist fuer Disaster Recovery und orchestriertes Failover von Workloads konzipiert." },
  { domain: "BCDR", text: "Eine Architektur braucht Schutz gegen Ausfall eines Datacenters innerhalb derselben Region. Was ist staerker als Availability Sets?", answers: ["Availability Zones", "Basic Load Balancer", "Local Redundant Storage only", "Manuelle Snapshots"], correct: 0, explanation: "Availability Zones schuetzen gegen Ausfall einer gesamten Zone (Datacenter) innerhalb einer Region." },
  { domain: "BCDR", text: "Ein Business sagt: 'Wir tolerieren maximal 4 Stunden Datenverlust und muessen in 8 Stunden wiederhergestellt sein.' Was bedeutet das?", answers: ["RTO = 4h, RPO = 8h", "RPO = 4h, RTO = 8h", "RTO = RPO = 4h", "RTO = 8h, kein RPO-Limit"], correct: 1, explanation: "RPO = maximaler Datenverlust (Recovery Point Objective). RTO = Zeit bis zur Wiederherstellung (Recovery Time Objective)." },
  { domain: "BCDR", text: "Eine Azure SQL Database soll automatisch zu einer Sekundaer-DB in anderer Region failovern, mit einheitlichem Connection String. Was verwendest du?", answers: ["Active Geo-Replication", "Auto-Failover Group", "Azure Backup Geo-Restore", "Azure Site Recovery"], correct: 1, explanation: "Auto-Failover Groups bieten automatisches Failover und einen unveraenderlichen Listener-Endpoint." },
  { domain: "BCDR", text: "Azure VM-Backups sollen bei Regionsausfall in eine Partnerregion wiederhergestellt werden koennen. Was muss im Vault aktiviert sein?", answers: ["Geo-Redundant Storage in Backup Policy", "Cross Region Restore im Recovery Services Vault", "Azure Site Recovery", "GZRS Storage"], correct: 1, explanation: "Cross Region Restore erlaubt das Wiederherstellen von VM-Backups in der Paired Region." },

  // --- COMPUTE ---
  { domain: "Compute", text: "Eine App verarbeitet sporadisch Events, soll automatisch skalieren und nur bei Ausfuehrung kosten. Was ist ideal?", answers: ["Azure Functions Consumption Plan", "Dedicated VM mit Windows Server", "Availability Set", "Azure Bastion"], correct: 0, explanation: "Functions im Consumption Plan: Event-driven, serverless, nutzungsbasierte Abrechnung." },
  { domain: "Compute", text: "Containerisierte Microservices brauchen Orchestrierung, Skalierung und Kubernetes APIs. Welche Loesung?", answers: ["AKS", "Azure Files", "Azure DNS", "Recovery Services Vault"], correct: 0, explanation: "AKS ist der verwaltete Kubernetes-Dienst fuer Container-Orchestrierung." },
  { domain: "Compute", text: "Eine Web-App auf VMs soll automatisch skalieren und neue Instanzen identisch konfiguriert starten. Was verwendest du?", answers: ["Availability Set", "VM Scale Set mit Launch Template", "Dedicated Host", "Proximity Placement Group"], correct: 1, explanation: "VM Scale Sets skalieren automatisch und starten neue VMs mit identischer Konfiguration." },
  { domain: "Compute", text: "Eine Web-App braucht Autoscaling, Custom Domains mit SSL und dedizierte Infrastruktur. Welcher App Service Plan mindestens?", answers: ["Free", "Basic", "Standard", "Premium"], correct: 2, explanation: "Standard bietet Autoscaling, Deployment Slots und SSL Bindings auf dedizierter Infrastruktur." },
  { domain: "Compute", text: "Ein Team will containerisierte Microservices betreiben, automatisch skalieren, ohne Kubernetes-Cluster zu verwalten. Was passt?", answers: ["AKS (Azure Kubernetes Service)", "Azure Container Apps", "Azure Container Instances", "Azure VM mit Docker"], correct: 1, explanation: "Container Apps bieten serverless Kubernetes-basierte Container-Orchestrierung ohne Cluster-Management." },
  { domain: "Compute", text: "Ein HPC-Batch-Job soll kostenguenstig berechnet werden. Unterbrechungen sind akzeptabel. Was empfiehlst du?", answers: ["Reserved VM Instances", "Spot VMs", "Dedicated Host", "Premium SSD VMs"], correct: 1, explanation: "Spot VMs sind bis zu 90% guenstiger, haben aber kein SLA und koennen jederzeit unterbrochen werden." },

  // --- MESSAGING ---
  { domain: "Messaging", text: "Ein System braucht Queues, Topics, Dead-lettering und robuste Enterprise Messaging Semantik. Welche Loesung?", answers: ["Event Grid", "Service Bus", "Traffic Manager", "Azure CDN"], correct: 1, explanation: "Service Bus ist fuer Enterprise Messaging mit Queues, Topics, DLQ und Reliable Delivery." },
  { domain: "Messaging", text: "Eine Millionen von IoT-Geraeten senden Telemetrie-Daten in Echtzeit fuer Stream-Analyse. Was ist passend?", answers: ["Service Bus Queue", "Azure Event Hubs", "Azure Queue Storage", "Azure Table Storage"], correct: 1, explanation: "Event Hubs ist fuer hochvolumige Datenstroeme konzipiert und Kafka-kompatibel." },

  // --- MIGRATION ---
  { domain: "Migration", text: "Ein Kunde will Server, Datenbanken und Abhaengigkeiten fuer eine Migration erfassen. Was ist der Startpunkt?", answers: ["Azure Migrate", "Azure Monitor Workbooks", "Azure Files Sync", "Azure Front Door"], correct: 0, explanation: "Azure Migrate ist der Hub fuer Discovery, Assessment und Migration von Servern, Datenbanken und Apps." },
  { domain: "Migration", text: "In welcher Reihenfolge laufen die ersten drei CAF-Phasen fuer eine Cloud-Migration ab?", answers: ["Plan → Strategy → Ready", "Strategy → Plan → Ready", "Ready → Plan → Strategy", "Adopt → Plan → Ready"], correct: 1, explanation: "CAF beginnt mit Strategy (Begrundung), dann Plan (Roadmap), dann Ready (Landing Zone), dann Adopt." },
  { domain: "Migration", text: "200 VMs sollen zu Azure migriert werden. Was ist der empfohlene erste Schritt mit Azure Migrate?", answers: ["Direkt alle VMs replizieren", "Discovery und Assessment mit Azure Migrate Appliance", "DMS-Import starten", "StorSimple Upload"], correct: 1, explanation: "Vor der Migration steht Discovery (Inventar) und Assessment (Sizing, Kompatibilitaet, Kosten)." },
  { domain: "Migration", text: "Eine Produktiv-Datenbank soll mit minimaler Downtime zu Azure Database for PostgreSQL migriert werden. Was verwendest du?", answers: ["Backup-Restore (Offline)", "Azure Database Migration Service mit Online Migration Mode", "Azure Data Box", "Azure Data Factory"], correct: 1, explanation: "DMS Online Mode repliziert laufend und erlaubt Cutover mit minimalem Datenverlust." },
  { domain: "Migration", text: "Eine App wird 1:1 als VM zu Azure verschoben ohne Aenderungen. Welche Migration-Strategie ist das?", answers: ["Replatform", "Refactor", "Rehost (Lift-and-Shift)", "Retire"], correct: 2, explanation: "Rehost/Lift-and-Shift bedeutet: keine Code- oder Architekturanderungen, einfache VM-Migration." },

  // --- ARCHITECTURE ---
  { domain: "Architecture", text: "Eine Loesung muss anhand Kosten, Sicherheit, Zuverlaessigkeit, Performance und Betrieb bewertet werden. Welches Framework?", answers: ["Azure Well-Architected Framework", "Microsoft Purview only", "Azure DevTest Labs", "Service Trust Portal"], correct: 0, explanation: "Das Well-Architected Framework bewertet Workloads ueber 5 Pillars: Reliability, Security, Cost, Operations, Performance." },
  { domain: "Architecture", text: "Eine Architektur muss bei Ausfall einer Zone weiterlaufen, RTO < 1h haben und Daten georedundant sichern. Welche WAF-Pillar adressiert das primaer?", answers: ["Cost Optimization", "Security", "Reliability", "Performance Efficiency"], correct: 2, explanation: "Reliability umfasst HA, DR, RTO/RPO und Resilienz-Patterns." },
  { domain: "Architecture", text: "Microservices sollen entkoppelt kommunizieren: Service A publiziert Events, Services B und C abonnieren unabhaengig. Welches Pattern?", answers: ["Direct REST Calls zwischen Services", "Event Hub oder Service Bus Topics (Publish-Subscribe)", "Shared SQL Database", "Shared Storage Account"], correct: 1, explanation: "Pub/Sub via Service Bus Topics oder Event Grid entkoppelt Publisher und Subscriber vollstaendig." },
  { domain: "Architecture", text: "Eine App soll in zwei Regionen gleichzeitig Traffic bedienen (active-active) mit globalem Routing. Was wird benoetigt?", answers: ["Azure Load Balancer (regional)", "Azure Front Door + identische Deployments in zwei Regionen", "Traffic Manager DNS-only", "Azure VPN Gateway"], correct: 1, explanation: "Front Door routet global basierend auf Latenz/Gesundheit. Active-Active erfordert Deployments in beiden Regionen." },
  { domain: "Architecture", text: "Welche Komponenten gehoeren zu einer Azure Landing Zone? (Umfassendste Antwort)", answers: ["Nur VNet und VMs", "Management Groups, Subscriptions, Networking, Identity, Security Baseline und Governance", "Nur Azure Policy", "Nur RBAC-Konfiguration"], correct: 1, explanation: "Landing Zones umfassen alle Fundament-Komponenten: Governance, Identity, Connectivity, Management und Security." },

  // --- SECURITY ---
  { domain: "Security", text: "Secrets und Zertifikate sollen zentral gespeichert und Zugriff auditiert werden. Welche Loesung?", answers: ["Azure Key Vault", "Azure Traffic Manager", "Azure Files", "Azure Batch"], correct: 0, explanation: "Key Vault ist fuer Secrets, Keys und Zertifikate mit Zugriffskontrolle und Audit-Logging." },
  { domain: "Security", text: "Den Security-Status aller Azure Ressourcen zentral bewerten, Schwachstellen erkennen, Secure Score sehen. Was verwendest du?", answers: ["Microsoft Sentinel", "Microsoft Defender for Cloud", "Azure Policy Compliance Dashboard", "Azure Advisor Security Tab"], correct: 1, explanation: "Defender for Cloud bietet CSPM (Secure Score, Empfehlungen) und CWPP (Workload-Schutz)." },
  { domain: "Security", text: "Ein SOC braucht SIEM/SOAR zum Korrelieren von Logs, Erkennen von Bedrohungen und automatischem Reagieren. Was passt?", answers: ["Log Analytics Workspace allein", "Microsoft Sentinel", "Azure Monitor Alerts only", "Defender for Cloud only"], correct: 1, explanation: "Sentinel ist Microsofts SIEM/SOAR mit Threat Detection, Incident Management und Playbooks." },
  { domain: "Security", text: "Compliance verlangt: Kunde muss vollstaendige Kontrolle ueber den Verschluesselungsschluessel haben und diesen jederzeit widerrufen koennen. Was?", answers: ["Platform Managed Keys (Standard)", "Customer Managed Keys (CMK) in Key Vault", "Storage Account Key Rotation", "Transparent Data Encryption Default"], correct: 1, explanation: "CMK erlaubt dem Kunden, Schluessel selbst zu verwalten und den Zugriff durch Widerruf sofort zu sperren." },
  { domain: "Security", text: "Administratoren sollen nur dann RDP-Zugriff bekommen, wenn sie explizit angefragte haben, und nur fuer begrenzte Zeit. Was verwendest du?", answers: ["NSG mit permanenter RDP-Regel", "Defender for Cloud Just-in-Time VM Access", "Azure Bastion permanent offen", "VPN permanent aktiviert"], correct: 1, explanation: "JIT VM Access oeffnet RDP/SSH-Ports nur fuer genehmigte Zeitfenster und schliesst sie danach automatisch." },

  // --- INTEGRATION ---
  { domain: "Integration", text: "Ein Prozess soll ohne viel Code mehrere SaaS-Connectoren und Genehmigungsschritte verbinden. Was passt?", answers: ["Logic Apps", "Azure VMware Solution", "Azure Bastion", "VM Scale Set"], correct: 0, explanation: "Logic Apps ist fuer Workflow-Automation mit 400+ Connectoren und visuellem Designer." },
  { domain: "Integration", text: "Mehrere Backend APIs sollen hinter einem einheitlichen Endpunkt zusammengefasst werden, mit Rate Limiting und Auth. Was verwendest du?", answers: ["Azure Load Balancer", "Azure API Management", "Azure Front Door ohne WAF", "Azure Service Bus"], correct: 1, explanation: "APIM bietet ein zentrales Gateway fuer APIs mit Policy-Engine, Auth, Rate Limiting und Developer Portal." },
  { domain: "Integration", text: "Eine Logic App in der Cloud muss auf eine On-Premises SQL-Datenbank zugreifen, ohne eine VPN- oder ExpressRoute-Verbindung aufzubauen. Was verwendest du?", answers: ["Azure Bastion", "On-Premises Data Gateway", "Service Endpoint", "Azure Arc"], correct: 1, explanation: "Das On-Premises Data Gateway bruckt Cloud-Dienste wie Logic Apps und Power BI sicher zu lokalen Datenquellen ohne dediziertes Netzwerk." },

  // --- MESSAGING (zusaetzlich) ---
  { domain: "Messaging", text: "Eine App braucht eine einfache, sehr kostenguenstige Queue zur Entkopplung. Topics, Sessions oder Transaktionen werden nicht benoetigt. Was reicht?", answers: ["Azure Service Bus Premium", "Azure Queue Storage", "Azure Event Hubs", "Azure Event Grid"], correct: 1, explanation: "Azure Queue Storage bietet einfaches, guenstiges Messaging fuer Entkopplung ohne Enterprise-Features wie Topics oder Sessions." },

  // --- IDENTITY (zusaetzlich) ---
  { domain: "Identity", text: "Benutzer sollen ihr Passwort selbst zuruecksetzen koennen, ohne den Helpdesk zu kontaktieren. Welche Funktion aktivierst du?", answers: ["Privileged Identity Management", "Self-Service Password Reset (SSPR)", "Conditional Access", "Pass-through Authentication"], correct: 1, explanation: "SSPR erlaubt Benutzern, ihr Passwort nach Verifizierung selbst zuruckzusetzen, und reduziert Helpdesk-Aufwand." },

  // --- NETWORK (zusaetzlich) ---
  { domain: "Network", text: "Viele VMs ohne eigene Public IP brauchen skalierbaren, vorhersehbaren ausgehenden Internetzugriff ohne SNAT-Port-Erschoepfung. Was empfiehlst du?", answers: ["Basic Load Balancer Outbound Rules", "Azure NAT Gateway", "Public IP pro VM", "Azure Bastion"], correct: 1, explanation: "NAT Gateway bietet skalierbare, robuste ausgehende Konnektivitaet mit vielen SNAT-Ports und stabiler Egress-IP." },

  // --- ARCHITECTURE / COST (zusaetzlich) ---
  { domain: "Architecture", text: "Eine Firma betreibt stabile Produktiv-VMs rund um die Uhr ueber 3 Jahre und hat bestehende Windows-Server-Lizenzen mit Software Assurance. Wie maximierst du die Einsparung?", answers: ["On-demand VMs mit Auto-Shutdown", "Reserved Instances kombiniert mit Azure Hybrid Benefit", "Spot VMs", "Premium SSD auf allen VMs"], correct: 1, explanation: "Reserved Instances (bis 72% Rabatt fuer stabile Last) plus Azure Hybrid Benefit (Wiederverwendung der Windows-Lizenzen) ergeben die hoechste Ersparnis." },

  // ============================================================
  // ERWEITERUNG: 70 weitere Cases (Richtung 150)
  // ============================================================

  // --- GOVERNANCE ---
  { domain: "Governance", text: "Eine Abteilung soll nur VMs bestimmter Groessen und nur in Westeurope erstellen duerfen. Wie erzwingst du das technisch?", answers: ["RBAC Reader Rolle", "Azure Policy mit 'Allowed VM SKUs' und 'Allowed Locations'", "Resource Lock", "Cost Management Budget"], correct: 1, explanation: "Built-in Policies wie 'Allowed virtual machine SKUs' und 'Allowed locations' beschraenken erlaubte Werte deklarativ." },
  { domain: "Governance", text: "Du willst mehrere zusammengehoerige Policies als eine Einheit zuweisen und gemeinsam verwalten. Was nutzt du?", answers: ["Einzelne Policy Assignments", "Azure Policy Initiative (Set Definition)", "Eine Management Group", "Mehrere Resource Locks"], correct: 1, explanation: "Eine Initiative buendelt mehrere Policy-Definitionen, die zusammen zugewiesen und ausgewertet werden." },
  { domain: "Governance", text: "Neue Subscriptions sollen automatisch unter eine bestimmte Management Group mit Baseline-Governance fallen. Was konfigurierst du?", answers: ["Default Management Group fuer neue Subscriptions", "Manuelles Verschieben nach Erstellung", "Azure Blueprint pro Subscription", "Nur Tags"], correct: 0, explanation: "In den Management-Group-Einstellungen laesst sich eine Default-Group fuer neue Subscriptions setzen, sodass Baseline-Policies sofort greifen." },
  { domain: "Governance", text: "Compliance verlangt einen Nachweis, welche Ressourcen gegen welche Regeln verstossen. Wo findest du das?", answers: ["Azure Advisor", "Policy Compliance State im Azure Policy Dashboard", "Activity Log", "Cost Management"], correct: 1, explanation: "Das Azure Policy Compliance Dashboard zeigt pro Policy/Initiative, welche Ressourcen konform oder nicht-konform sind." },
  { domain: "Governance", text: "Ressourcen ohne ein 'Owner'-Tag sollen gar nicht erst erstellt werden koennen. Welcher Policy-Effekt?", answers: ["Audit", "Deny", "Modify", "DeployIfNotExists"], correct: 1, explanation: "Deny blockiert die Erstellung von Ressourcen, die die Bedingung (fehlendes Tag) erfuellen." },

  // --- IDENTITY ---
  { domain: "Identity", text: "Eine App-Registrierung muss Microsoft Graph ohne angemeldeten Benutzer (als Hintergrunddienst) aufrufen. Welcher Berechtigungstyp?", answers: ["Delegated Permissions", "Application Permissions", "Nur RBAC-Rolle", "Shared Access Signature"], correct: 1, explanation: "Application Permissions gelten fuer App-only-Zugriff ohne Benutzerkontext (Daemon/Service)." },
  { domain: "Identity", text: "Mehrere Web-Apps sollen sich EINE verwaltete Identitaet teilen, ohne Secrets zu verwalten. Was nutzt du?", answers: ["System-assigned Managed Identity je App", "User-assigned Managed Identity", "Service Principal mit Secret", "Storage Account Key"], correct: 1, explanation: "Eine User-assigned Managed Identity kann mehreren Ressourcen zugewiesen werden und teilt so eine Identitaet." },
  { domain: "Identity", text: "Anmeldungen mit hohem Risiko sollen automatisch MFA erzwingen oder blockiert werden. Welche Funktion?", answers: ["Microsoft Entra ID Protection mit risikobasiertem Conditional Access", "PIM", "Access Reviews", "Defender for Cloud"], correct: 0, explanation: "Identity Protection bewertet Anmelde-/Benutzerrisiko und kann ueber Conditional Access automatisch reagieren." },
  { domain: "Identity", text: "Ein Gastbenutzer soll nur eine einzige zugewiesene App sehen und sonst nichts im Verzeichnis durchsuchen koennen. Welche Massnahme?", answers: ["Globaler Admin", "Restricted Guest Permissions + gezielte App-Zuweisung", "Owner-Rolle", "Das ist nicht moeglich"], correct: 1, explanation: "Mit eingeschraenkten Gastberechtigungen und gezielter App-Zuweisung sieht der Gast nur das Noetigste." },

  // --- MONITORING ---
  { domain: "Monitoring", text: "Du brauchst interaktive Dashboards mit KQL-Visualisierungen aus mehreren Datenquellen. Was nutzt du?", answers: ["Nur Azure Dashboards", "Azure Monitor Workbooks", "Nur Power BI", "Service Health"], correct: 1, explanation: "Workbooks kombinieren Texte, KQL-Abfragen, Metriken und Parameter zu interaktiven Reports." },
  { domain: "Monitoring", text: "Gast-OS-Metriken einer VM (z. B. freier Arbeitsspeicher, Festplattenbelegung) sollen erfasst werden. Was ist noetig?", answers: ["Platform Metrics reichen", "Azure Monitor Agent mit Data Collection Rule", "Network Watcher", "Activity Log"], correct: 1, explanation: "Gast-Metriken/-Logs erfordern den Azure Monitor Agent, gesteuert ueber Data Collection Rules." },
  { domain: "Monitoring", text: "Logs sollen 2 Jahre sehr guenstig aufbewahrt und nur selten abgefragt werden. Welche Option?", answers: ["Alles im Analytics-Tier hot halten", "Archive-Tier / langfristige Aufbewahrung im Workspace", "Manuell in Storage kopieren", "Event Hub Dauerstream"], correct: 1, explanation: "Der Archive-Tier des Log Analytics Workspace senkt die Kosten fuer selten genutzte Langzeit-Logs deutlich." },
  { domain: "Monitoring", text: "Ein Alarm soll ausloesen, wenn ein Muster ueber mehrere Ressourcen in den Logs auftritt. Welcher Alert-Typ?", answers: ["Metric Alert", "Log Search Alert Rule (Scheduled Query)", "Activity Log Alert", "Service Health Alert"], correct: 1, explanation: "Log Search Alerts werten eine KQL-Abfrage periodisch aus und eignen sich fuer komplexe, ressourcenuebergreifende Muster." },
  { domain: "Monitoring", text: "Du willst die Erreichbarkeit einer Webseite global aus mehreren Regionen automatisch testen. Was nutzt du?", answers: ["Network Watcher", "Application Insights Availability Tests", "Load Balancer Health Probe", "Azure Advisor"], correct: 1, explanation: "Availability Tests in Application Insights pingen URLs aus mehreren Regionen und alarmieren bei Ausfaellen." },

  // --- NETWORK ---
  { domain: "Network", text: "Der gesamte ausgehende Internetverkehr aller Spokes soll zentral gefiltert werden. Wie routest du das?", answers: ["Public IP pro Spoke", "UDR mit 0.0.0.0/0 auf die Azure Firewall im Hub (forced tunneling)", "Nur NSGs", "Service Endpoints"], correct: 1, explanation: "Eine User Defined Route fuer 0.0.0.0/0 zwingt den Egress ueber die zentrale Firewall im Hub." },
  { domain: "Network", text: "Zwei Spoke-VNets sollen NICHT direkt kommunizieren, sondern nur ueber den Hub. Was musst du beachten?", answers: ["VNet Peering ist transitiv", "Peering ist nicht transitiv - Routing muss ueber eine Hub-NVA/Firewall erfolgen", "Gateway Transit deaktivieren genuegt", "Die VNets zusammenfuehren"], correct: 1, explanation: "Peering ist nicht transitiv. Spoke-zu-Spoke laeuft nur via NVA/Firewall im Hub mit passenden UDRs." },
  { domain: "Network", text: "Eine Spoke-VM soll On-Prem ueber das VPN-Gateway im Hub erreichen. Welche Peering-Einstellung?", answers: ["Allow Gateway Transit am Hub + Use Remote Gateways am Spoke", "Eigenes Gateway pro Spoke", "ExpressRoute pro Spoke", "Nur eine NSG-Regel"], correct: 0, explanation: "Gateway Transit am Hub plus 'Use remote gateways' am Spoke teilt das zentrale Gateway mit den Spokes." },
  { domain: "Network", text: "Du brauchst L7-Lastenausgleich mit SSL-Offload und pfadbasiertem Routing innerhalb EINER Region. Was?", answers: ["Front Door", "Application Gateway", "Traffic Manager", "Basic Load Balancer"], correct: 1, explanation: "Application Gateway ist der regionale Layer-7-Load-Balancer mit Path-based Routing, SSL-Offload und WAF-Option." },
  { domain: "Network", text: "On-Prem und Azure sollen Namen bidirektional aufloesen, ohne eigene DNS-Server-VMs zu betreiben. Was nutzt du?", answers: ["Custom DNS auf jeder VM", "Azure DNS Private Resolver", "Nur oeffentliche Azure DNS Zone", "Traffic Manager"], correct: 1, explanation: "Der Azure DNS Private Resolver bietet verwaltete Inbound/Outbound-Endpunkte fuer hybride DNS-Aufloesung ohne DNS-VMs." },

  // --- STORAGE ---
  { domain: "Storage", text: "Versehentlich geloeschte Blobs sollen 14 Tage lang wiederherstellbar sein. Was aktivierst du?", answers: ["Immutable Storage", "Soft Delete fuer Blobs", "Nur GRS", "Nur Versioning"], correct: 1, explanation: "Blob Soft Delete behaelt geloeschte Blobs fuer eine konfigurierte Aufbewahrungszeit und erlaubt Wiederherstellung." },
  { domain: "Storage", text: "Eine datenbankintensive VM braucht hoechste IOPS und niedrigste Latenz fuer ihre Daten-Disk. Welcher Disk-Typ?", answers: ["Standard HDD", "Premium SSD v2 oder Ultra Disk", "Standard SSD", "Blob Storage"], correct: 1, explanation: "Ultra Disk bzw. Premium SSD v2 liefern hohe IOPS/Durchsatz bei niedriger Latenz fuer anspruchsvolle DB-Workloads." },
  { domain: "Storage", text: "Daten sollen in einer zweiten Region auch lesend verfuegbar sein (Read-Workloads). Welche Redundanz?", answers: ["LRS", "GRS", "RA-GRS (Read-Access Geo-Redundant)", "ZRS"], correct: 2, explanation: "RA-GRS/RA-GZRS erlauben Lesezugriff auf die georeplizierte Sekundaerregion." },
  { domain: "Storage", text: "Statischer Website-Content aus Blob Storage soll global mit niedriger Latenz ausgeliefert werden. Was kombinierst du?", answers: ["Azure CDN oder Front Door vor der Blob Static Website", "Azure Files", "Premium Disk", "Table Storage"], correct: 0, explanation: "Ein CDN/Front Door cached statische Inhalte am Edge und reduziert Latenz weltweit." },
  { domain: "Storage", text: "Ein On-Prem-Fileserver soll mit Azure Files synchronisiert werden und haeufig genutzte Dateien lokal cachen. Was nutzt du?", answers: ["Taegliches AzCopy", "Azure File Sync", "Azure Data Box", "Storage Migration Service"], correct: 1, explanation: "Azure File Sync synchronisiert Shares in die Cloud und haelt mit Cloud Tiering nur heisse Daten lokal vor." },
  { domain: "Storage", text: "Sehr viele kleine Key-Value-Eintraege sollen guenstig und ohne relationale Features gespeichert werden. Was?", answers: ["Azure SQL", "Azure Table Storage", "Azure Files", "Premium Blob"], correct: 1, explanation: "Table Storage ist ein guenstiger NoSQL-Key-Value-/Attribut-Store fuer grosse Mengen einfacher Datensaetze." },

  // --- DATA ---
  { domain: "Data", text: "Eine Azure SQL DB hat sporadische, unvorhersehbare Last und soll bei Inaktivitaet automatisch pausieren. Welche Option?", answers: ["Provisioned vCore", "Serverless Compute Tier (Auto-Pause)", "Nur Hyperscale", "Elastic Pool"], correct: 1, explanation: "Der Serverless-Tier skaliert automatisch und pausiert bei Inaktivitaet - ideal fuer unregelmaessige Last." },
  { domain: "Data", text: "Eine Azure SQL Datenbank waechst auf 50+ TB und braucht schnelle Backups/Restores. Welcher Service Tier?", answers: ["Basic", "Hyperscale", "Managed Instance General Purpose", "Single DB Standard"], correct: 1, explanation: "Hyperscale unterstuetzt sehr grosse Datenbanken mit schnellen, snapshot-basierten Backups/Restores." },
  { domain: "Data", text: "Eine globale App soll in mehreren Regionen mit garantiert niedriger Schreiblatenz schreiben. Was aktivierst du in Cosmos DB?", answers: ["Single-Region Write", "Multi-Region Writes (Multi-Master)", "Strong Consistency global", "Nur manuelles Failover"], correct: 1, explanation: "Multi-Region Writes erlauben lokale Schreibvorgaenge in jeder Region mit niedriger Latenz." },
  { domain: "Data", text: "Analytische Abfragen sollen auf Cosmos-Daten laufen, ohne RUs des transaktionalen Stores zu verbrauchen. Was nutzt du?", answers: ["Direkt den Container abfragen", "Azure Synapse Link (Analytical Store)", "Einfach mehr RUs kaufen", "Nur den Change Feed"], correct: 1, explanation: "Synapse Link spiegelt Daten in einen analytischen Store, der ohne RU-Verbrauch des OLTP-Stores abgefragt wird." },
  { domain: "Data", text: "Sensible Spalten sollen so verschluesselt sein, dass selbst Datenbank-Administratoren sie nicht im Klartext sehen. Welche Funktion?", answers: ["Transparent Data Encryption", "Always Encrypted", "Dynamic Data Masking", "Nur TLS"], correct: 1, explanation: "Always Encrypted verschluesselt clientseitig - der DB-Server (und Admins) sehen nur Chiffretext." },

  // --- BCDR ---
  { domain: "BCDR", text: "Eine zonenredundante App soll zusaetzlich einen kompletten Regionsausfall ueberstehen. Was ergaenzt du?", answers: ["Nur mehr Zonen", "Zweite Region + globales Routing (Front Door) + Geo-Replikation der Daten", "Groessere VMs", "Mehr Backups"], correct: 1, explanation: "Regionale Resilienz braucht ein zweites Deployment in einer anderen Region, globales Routing und replizierte Daten." },
  { domain: "BCDR", text: "Eine SQL-Datenbank braucht nahezu RPO 0 in einer zweiten Region mit automatischem Failover. Was nutzt du?", answers: ["Taegliches Backup", "Auto-Failover Group / Active Geo-Replication", "Nur GRS-Backup", "Import/Export"], correct: 1, explanation: "Geo-Replication/Auto-Failover-Group repliziert kontinuierlich asynchron mit sehr kurzer Verzoegerung (RPO nahe 0)." },
  { domain: "BCDR", text: "Backups einer kritischen VM sollen vor versehentlichem oder boeswilligem Loeschen geschuetzt werden. Was aktivierst du?", answers: ["Nichts noetig", "Soft Delete (und Multi-User Authorization) im Recovery Services Vault", "Nur GRS", "Resource Lock auf der VM"], correct: 1, explanation: "Soft Delete bewahrt geloeschte Backups auf; MUA verhindert unautorisierte kritische Aktionen am Vault." },
  { domain: "BCDR", text: "Du willst die DR-Strategie testen, ohne die Produktion zu beeintraechtigen. Welche ASR-Funktion?", answers: ["Echtes Failover ausloesen", "Test Failover in ein isoliertes VNet", "Backup Restore", "Nichts - testen geht nicht"], correct: 1, explanation: "Test Failover startet die Replikate in einem isolierten Netz, ohne die Produktion oder laufende Replikation zu stoeren." },
  { domain: "BCDR", text: "Eine zustandslose Web-Tier soll bei Ausfall einer Zone unterbrechungsfrei weiterlaufen. Architektur?", answers: ["Eine einzelne grosse VM", "VM Scale Set ueber 3 Zonen + zonenredundanter Standard Load Balancer", "Availability Set in einer Zone", "Manuelles Failover"], correct: 1, explanation: "Ein zonenuebergreifendes Scale Set hinter einem zonenredundanten Standard LB ueberlebt einen Zonenausfall." },
  { domain: "BCDR", text: "Die RTO ist sehr kurz, ein ASR-Failover der Datenbank dauert aber zu lange. Welches Muster fuer die DB?", answers: ["ASR auch fuer die DB nutzen", "DB vorab via Auto-Failover Group replizieren (warm standby)", "Erst bei Ausfall ein Backup einspielen", "Cold Standby"], correct: 1, explanation: "Eine vorab replizierte DB (warm standby) erfuellt kurze RTOs besser als ein nachgelagerter ASR-/Restore-Prozess." },

  // --- COMPUTE ---
  { domain: "Compute", text: "Eine Legacy-App braucht Windows, volle OS-Kontrolle und spezielle Treiber. Welche Compute-Option?", answers: ["Azure Functions", "IaaS Virtual Machine", "App Service", "Container Apps"], correct: 1, explanation: "Volle OS-Kontrolle und Treiberinstallation erfordern eine IaaS-VM." },
  { domain: "Compute", text: "Eine .NET-Web-App soll ohne OS-Verwaltung laufen, mit Deployment Slots und Autoscaling. Was?", answers: ["VM Scale Set", "Azure App Service (Web App)", "AKS", "Azure Batch"], correct: 1, explanation: "App Service ist PaaS fuer Web-Apps mit Slots, Autoscale und ohne OS-Management." },
  { domain: "Compute", text: "Zehntausende parallele Batch-Rendering-Jobs sollen verwaltet und skaliert werden. Welcher Dienst?", answers: ["Azure Functions", "Azure Batch", "App Service", "Logic Apps"], correct: 1, explanation: "Azure Batch orchestriert grosse parallele HPC-/Batch-Workloads ueber Pools von Compute-Knoten." },
  { domain: "Compute", text: "Eine containerisierte App mit unregelmaessigen Spitzen soll bei Leerlauf auf null herunterskalieren. Was?", answers: ["AKS Standard-Nodepool", "Azure Container Apps (scale-to-zero via KEDA)", "Dedizierte VMs", "Service Fabric"], correct: 1, explanation: "Container Apps skalieren ereignisbasiert mit KEDA bis auf null und sparen so im Leerlauf Kosten." },
  { domain: "Compute", text: "Dev/Test-VMs werden nachts nicht gebraucht. Wie senkst du die Kosten am einfachsten?", answers: ["Reserved Instances", "Auto-Shutdown / geplantes Start-Stop", "Premium Disks", "Mehr Zonen"], correct: 1, explanation: "Geplantes Herunterfahren stoppt die Compute-Abrechnung ausserhalb der Arbeitszeiten." },
  { domain: "Compute", text: "Eine AKS-Anwendung soll ihre Pods garantiert ueber Verfuegbarkeitszonen verteilen. Was konfigurierst du?", answers: ["Single-Zone Nodepool", "Multi-Zone Nodepools + Pod Topology Spread Constraints", "Nur einen Node", "Nur Spot-Knoten"], correct: 1, explanation: "Knoten ueber Zonen plus Topology-Spread-Constraints verteilen Pods resilient ueber die Zonen." },

  // --- MESSAGING ---
  { domain: "Messaging", text: "Nachrichten muessen pro Kunde in garantierter Reihenfolge (FIFO) verarbeitet werden. Welche Service-Bus-Funktion?", answers: ["Auto-Forward", "Sessions (Message Sessions)", "Dead-letter Queue", "Prefetch"], correct: 1, explanation: "Service Bus Sessions garantieren geordnete, zusammenhaengende Verarbeitung pro Session-ID." },
  { domain: "Messaging", text: "Doppelt gesendete Nachrichten sollen nicht doppelt verarbeitet werden. Welche Funktion?", answers: ["Sessions", "Duplicate Detection", "Dead-lettering", "Prefetch"], correct: 1, explanation: "Duplicate Detection verwirft Nachrichten mit bereits gesehener MessageId innerhalb eines Zeitfensters." },
  { domain: "Messaging", text: "Ein Event soll mehrere unabhaengige Abonnenten erreichen, jeder mit eigenem Filter. Was nutzt du?", answers: ["Eine Queue", "Service Bus Topic mit Subscriptions und Filtern", "Event Hub Consumer Group", "Storage Queue"], correct: 1, explanation: "Topics verteilen jede Nachricht an mehrere Subscriptions, die per Regeln/Filtern selektieren." },
  { domain: "Messaging", text: "Millionen Klick-Events pro Sekunde sollen erfasst und 7 Tage fuer Replay/Analyse vorgehalten werden. Was?", answers: ["Service Bus Queue", "Event Hubs (mit Retention/Capture)", "Storage Queue", "Event Grid"], correct: 1, explanation: "Event Hubs ist auf hohe Durchsaetze ausgelegt und erlaubt Retention sowie Capture fuer spaetere Verarbeitung." },
  { domain: "Messaging", text: "Ein Blob-Upload soll automatisch eine Azure Function ausloesen. Welcher Dienst verbindet das am elegantesten?", answers: ["Service Bus", "Event Grid (Blob Created Event)", "Event Hubs", "Storage Queue Polling"], correct: 1, explanation: "Event Grid liefert Storage-Events (z. B. BlobCreated) push-basiert an Handler wie Functions." },

  // --- MIGRATION ---
  { domain: "Migration", text: "Eine grosse SQL-Server-DB soll mit minimaler Downtime zu Azure SQL Managed Instance migriert werden. Tool?", answers: ["Offline Backup-Restore", "Azure Database Migration Service (Online)", "Azure Data Box", "AzCopy"], correct: 1, explanation: "DMS im Online-Modus repliziert laufend und erlaubt einen Cutover mit minimaler Ausfallzeit." },
  { domain: "Migration", text: "Physische On-Prem-Server (kein VMware/Hyper-V) sollen nach Azure migriert werden. Welche Option in Azure Migrate?", answers: ["Nur agentless", "Agent-based Replikation fuer physische Server", "Nur Data Box", "Storage Migration Service"], correct: 1, explanation: "Physische Server werden mit der agent-basierten Replikation von Azure Migrate erfasst und repliziert." },
  { domain: "Migration", text: "Vor der Migration sollen passende Azure-VM-Groessen und monatliche Kosten ermittelt werden. Was liefert das?", answers: ["Azure Advisor", "Azure Migrate Assessment (Right-Sizing + Cost)", "Manueller Pricing Calculator", "Cost Management"], correct: 1, explanation: "Ein Azure-Migrate-Assessment liefert Sizing-Empfehlungen, Azure-Bereitschaft und Kostenschaetzungen." },
  { domain: "Migration", text: "Eine App wird auf Azure App Service statt auf eine VM gehoben - kleiner PaaS-Umbau, kaum Codeaenderung. Welche Strategie?", answers: ["Rehost", "Replatform", "Refactor", "Retire"], correct: 1, explanation: "Replatform (Lift-and-Optimize) nutzt PaaS-Vorteile mit minimalen Anpassungen, ohne komplettes Refactoring." },
  { domain: "Migration", text: "Hunderte TB an Dateifreigaben sollen offline migriert und danach laufend synchron gehalten werden. Kombination?", answers: ["Nur AzCopy", "Data Box fuer den Bulk-Transfer + Azure File Sync fuer Deltas", "Nur DMS", "Nur ExpressRoute"], correct: 1, explanation: "Data Box bewegt die grosse Erstmenge offline; Azure File Sync haelt die Shares anschliessend synchron." },

  // --- ARCHITECTURE ---
  { domain: "Architecture", text: "Auftraege sollen lose gekoppelt, skalierbar und ausfalltolerant verarbeitet werden. Welches Muster?", answers: ["Direkte synchrone Aufrufe", "Queue-Based Load Leveling mit Worker (Competing Consumers)", "Shared-DB-Polling", "Singleton-Service"], correct: 1, explanation: "Eine Queue puffert Last und entkoppelt Producer von skalierbaren Worker-Consumern." },
  { domain: "Architecture", text: "Lese-Last dominiert stark und teure Datenbank-Reads sollen entlastet werden. Was setzt du ein?", answers: ["Nur mehr DB-Repliken", "Cache-Aside-Muster mit Azure Cache for Redis", "Eine groessere DB", "Synchrone Calls"], correct: 1, explanation: "Cache-Aside mit Redis bedient haeufige Reads aus dem Cache und entlastet die Datenbank." },
  { domain: "Architecture", text: "Eine lange Hintergrundverarbeitung soll den Web-Request nicht blockieren. Welches Muster?", answers: ["Synchron warten", "Asynchrones Request-Reply ueber Queue + Worker", "Timeout erhoehen", "Mehr Threads im Webserver"], correct: 1, explanation: "Asynchrones Request-Reply nimmt den Auftrag an, verarbeitet ihn entkoppelt und liefert das Ergebnis spaeter." },
  { domain: "Architecture", text: "Welcher Well-Architected-Pillar adressiert primaer Monitoring, Automatisierung und Betriebsablaeufe?", answers: ["Reliability", "Operational Excellence", "Cost Optimization", "Security"], correct: 1, explanation: "Operational Excellence umfasst DevOps, Automatisierung, Observability und Betriebsprozesse." },
  { domain: "Architecture", text: "Konfigurationswerte und Feature Flags sollen zentral fuer viele Services verwaltet werden. Welcher Dienst?", answers: ["Nur Key Vault", "Azure App Configuration", "Storage Account", "Werte hart kodieren"], correct: 1, explanation: "Azure App Configuration zentralisiert Einstellungen und Feature Flags (Secrets gehoeren in Key Vault)." },
  { domain: "Architecture", text: "Eine Microservice-Architektur braucht einen einzigen Eingang mit Routing, Auth und Rate Limiting. Welches Muster?", answers: ["Direkt auf jeden Service zugreifen", "API Gateway (z. B. API Management)", "Gemeinsame Code-Bibliothek", "Nur ein Load Balancer"], correct: 1, explanation: "Das Gateway-Routing-Muster (APIM) buendelt Cross-Cutting-Concerns an einem zentralen Eingang." },
  { domain: "Architecture", text: "Stabile Basislast plus variable Spitzen sollen kostenoptimal abgedeckt werden. Welche Kombination?", answers: ["Alles On-demand", "Reserved/Savings Plan fuer die Basislast + On-Demand/Spot fuer Spitzen", "Alles Reserved", "Alles Spot"], correct: 1, explanation: "Commitments decken die planbare Basislast guenstig ab, flexible Kapazitaet faengt Spitzen ab." },

  // --- SECURITY ---
  { domain: "Security", text: "Eine Web-App soll vor SQL Injection und OWASP Top 10 geschuetzt werden. Was setzt du ein?", answers: ["NSG", "Web Application Firewall (WAF) auf Front Door/App Gateway", "Azure Firewall Basic", "Nur DDoS Protection"], correct: 1, explanation: "Die WAF filtert Layer-7-Angriffe wie Injection/XSS anhand von Regelsaetzen (OWASP)." },
  { domain: "Security", text: "Oeffentliche Endpunkte sollen gegen volumetrische DDoS-Angriffe mit Schutz-SLA abgesichert werden. Was?", answers: ["NSG", "Azure DDoS Protection", "Nur WAF", "Azure Bastion"], correct: 1, explanation: "Azure DDoS Protection bietet adaptive Abwehr volumetrischer Angriffe inkl. Telemetrie und SLA." },
  { domain: "Security", text: "Key-Vault-Secrets sollen automatisch rotiert werden und Apps ueber neue Versionen informiert werden. Was nutzt du?", answers: ["Manuelle Rotation", "Key Vault Rotation Policy + Event Grid Benachrichtigungen", "Ein neues Vault pro Rotation", "Access Policies"], correct: 1, explanation: "Rotation Policies erneuern Secrets automatisch; Event Grid benachrichtigt Consumer ueber neue Versionen." },
  { domain: "Security", text: "In AKS sollen nur signierte/zugelassene Container-Images laufen duerfen. Was setzt du ein?", answers: ["Nichts", "Azure Policy fuer AKS (Gatekeeper) mit Image-Restriktionen", "Nur NSGs", "Manuelle Reviews"], correct: 1, explanation: "Azure Policy fuer AKS (OPA/Gatekeeper) erzwingt Admission-Regeln wie erlaubte Registries/Images." },
  { domain: "Security", text: "Der Compliance-Status gegen Standards wie ISO 27001 oder CIS soll zentral nachgewiesen werden. Was?", answers: ["Einzelne Azure Policies", "Defender for Cloud - Regulatory Compliance Dashboard", "Nur Sentinel", "Activity Log"], correct: 1, explanation: "Das Regulatory-Compliance-Feature in Defender for Cloud mappt Kontrollen auf Standards und zeigt den Status." },
  { domain: "Security", text: "Datenexfiltration ueber einen PaaS-Storage soll verhindert werden: nur dein VNet darf zugreifen. Welche Kombination?", answers: ["Nur eine Firewall-IP-Regel", "Private Endpoint + oeffentlichen Netzwerkzugriff deaktivieren", "Service Endpoint reicht immer", "Nur SAS-Token"], correct: 1, explanation: "Private Endpoint plus deaktivierter Public Access bindet den Dienst privat ans VNet und sperrt das Internet aus." },

  // --- INTEGRATION ---
  { domain: "Integration", text: "Ein B2B-Partner sendet EDI/X12-Nachrichten, die transformiert und validiert werden muessen. Was nutzt du?", answers: ["Nur Functions", "Logic Apps mit Integration Account (Enterprise Integration Pack)", "Service Bus", "API Management"], correct: 1, explanation: "Das Integration Account ermoeglicht EDI/AS2/X12-Schemas, Maps und Validierung in Logic Apps." },
  { domain: "Integration", text: "Hunderttausende Geraete sollen Telemetrie senden und Cloud-zu-Geraet-Befehle empfangen. Welcher Dienst?", answers: ["Event Grid", "Azure IoT Hub", "Service Bus Queue", "Storage Queue"], correct: 1, explanation: "IoT Hub bietet bidirektionale, sichere Geraetekommunikation in grossem Massstab inkl. Device Management." },
  { domain: "Integration", text: "Ein langlaufender, zustandsbehafteter Workflow mit Schritten, Wartezeiten und Wiederaufnahme soll in Code umgesetzt werden. Was?", answers: ["Normale Functions", "Durable Functions (Orchestrator)", "Nur Logic Apps Consumption", "WebJobs"], correct: 1, explanation: "Durable Functions verwalten Zustand, Checkpoints und Orchestrierung langlaufender Workflows im Code." },
  { domain: "Integration", text: "Daten aus 100+ SaaS- und On-Prem-Quellen sollen als ETL/ELT-Pipelines orchestriert werden. Welcher Dienst?", answers: ["Logic Apps", "Azure Data Factory", "Azure Functions", "Event Grid"], correct: 1, explanation: "Data Factory ist der verwaltete Datenintegrationsdienst fuer ETL/ELT-Pipelines mit vielen Konnektoren." },
  { domain: "Integration", text: "Eine synchrone Client-API soll mehrere Backends aggregieren, transformieren und mit Policies absichern. Was?", answers: ["Logic Apps", "API Management mit Policies", "Event Grid", "Front Door allein"], correct: 1, explanation: "APIM fasst Backends hinter einer API zusammen und wendet Policies (Auth, Transform, Rate Limit) an." },
];

// ============================================================
// CHEATSHEET (1 Seite pro Domain, druckbar)
// ============================================================
const cheatsheet = [
  { domain: "Governance", abbr: "GV", tag: "Governance & Kosten", points: [
    ["Multi-Org Struktur", "Management Groups → Subscriptions → Resource Groups. Policy & RBAC werden nach unten vererbt."],
    ["Isolation", "Eigene Subscription = harte Grenze für Billing, IAM und Netzwerk."],
    ["Policy-Effekte", "Deny blockt · Audit meldet · DeployIfNotExists richtet ein · Modify setzt Tags."],
    ["Kosten-Alarm", "Cost Management Budget mit Alert bei % des Monatsbudgets."],
    ["Tags erzwingen", "Policy 'Inherit tag from subscription' oder 'Require tag'."],
    ["Ausnahme", "Policy Exemption statt das Assignment zu löschen."],
    ["Schutz vor Löschen", "Delete Lock (Ändern bleibt erlaubt) vs ReadOnly Lock."],
  ]},
  { domain: "Identity", abbr: "ID", tag: "Entra & Zugriff", points: [
    ["Just-in-Time Admin", "Entra PIM: zeitlich begrenzt, Approval, MFA, Audit."],
    ["Bedingter Zugriff", "Conditional Access: MFA/Block nach Risiko, Standort, Gerät."],
    ["App ohne Secret", "Managed Identity (nur Azure-nativ) statt Credentials im Code."],
    ["On-Prem App → Azure", "Service Principal (Zertifikat/Secret), keine Managed Identity."],
    ["Hybrid Login", "Password Hash Sync / Pass-through Auth statt ADFS."],
    ["Externe Partner", "Entra B2B (eigenes Konto). B2C = Kunden-Apps (CIAM)."],
    ["Self-Service", "SSPR für Passwort-Reset; Access Reviews für Gäste."],
  ]},
  { domain: "Monitoring", abbr: "MON", tag: "Observability", points: [
    ["App-Telemetrie", "Application Insights (APM, Dependencies, Performance)."],
    ["Zentrale Logs + KQL", "Log Analytics Workspace."],
    ["Logs verteilen", "Diagnostic Settings → Workspace + Event Hub + Storage gleichzeitig."],
    ["Wer hat was geändert?", "Activity Log (Control-Plane-Audit)."],
    ["Plattformstörung?", "Service Health. Einzelne Ressource → Resource Health."],
    ["Schwellwert-Alarm", "Metric Alert + Action Group (Mail/Teams/Webhook)."],
  ]},
  { domain: "Network", abbr: "NET", tag: "Connectivity", points: [
    ["Globales HTTP + WAF", "Front Door (Anycast, Edge-WAF). Regional L7 → App Gateway."],
    ["PaaS privat", "Private Endpoint (private IP im VNet) + Private DNS Zone."],
    ["Dediziert zu On-Prem", "ExpressRoute (privat) vs Site-to-Site VPN (Internet)."],
    ["VNet↔VNet gleiche Region", "VNet Peering (Backbone, niedrigste Latenz)."],
    ["Admin ohne Public IP", "Azure Bastion (RDP/SSH im Browser)."],
    ["L7-Firewall, IDPS, TLS", "Azure Firewall Premium. NSG = nur L3/L4."],
    ["Egress ohne SNAT-Stau", "NAT Gateway. Viele Standorte → Virtual WAN."],
  ]},
  { domain: "Storage", abbr: "STG", tag: "Daten ablegen", points: [
    ["Zonenredundanz", "ZRS (in Region). Geo → GRS/GZRS. Günstig lokal → LRS."],
    ["Auto-Tiering", "Lifecycle Management (Hot → Cool → Archive)."],
    ["WORM / Compliance", "Immutable Blob Storage mit Retention Policy."],
    ["Großmigration offline", "Azure Data Box (z. B. 100+ TB)."],
    ["Zeitlich begrenzter Zugriff", "SAS-Token (Scope + Ablauf) statt Account Key."],
    ["SMB-Fileshare", "Azure Files. Objektdaten → Blob Storage."],
  ]},
  { domain: "Data", abbr: "DB", tag: "Datenbanken", points: [
    ["SQL Lift-and-Shift", "Managed Instance (Agent, Cross-DB). Neue App → SQL DB."],
    ["Global NoSQL", "Cosmos DB (Multi-Region-Write, niedrige Latenz)."],
    ["Viele DBs, ungleiche Peaks", "SQL Elastic Pool (geteilte Ressourcen)."],
    ["Versehentliche Änderung", "Point-in-Time Restore (PITR)."],
    ["Cosmos Consistency", "Strong → Eventual. Session = Standard. Eventual = max. Verfügbarkeit."],
    ["Hot Partition", "Partition Key mit höherer Kardinalität wählen."],
    ["Spark / ML", "Databricks. Unified SQL-DWH → Synapse."],
  ]},
  { domain: "BCDR", abbr: "DR", tag: "Continuity & DR", points: [
    ["Workload-Failover", "Azure Site Recovery (orchestriert, Region-Pair)."],
    ["Datacenter-Ausfall", "Availability Zones (stärker als Availability Sets)."],
    ["RPO vs RTO", "RPO = max. Datenverlust · RTO = max. Ausfallzeit."],
    ["SQL Auto-DR", "Auto-Failover Group (ein Listener, automatisch)."],
    ["VM-Backup in Partnerregion", "Cross Region Restore im Recovery Services Vault."],
    ["Backup vs ASR", "Backup = Daten/Restore-Punkte · ASR = ganzer Workload-Failover."],
  ]},
  { domain: "Compute", abbr: "CMP", tag: "Rechenleistung", points: [
    ["Event-getrieben, pay-per-use", "Azure Functions (Consumption Plan)."],
    ["Voller Kubernetes", "AKS. Serverless K8s → Container Apps. Einzelcontainer → ACI."],
    ["Auto-skalierende VMs", "VM Scale Sets (identisch konfigurierte Instanzen)."],
    ["Günstige Batch-Last", "Spot VMs (bis −90%, kein SLA)."],
    ["Stabile 24/7-Last", "Reserved Instances (bis −72%) + Azure Hybrid Benefit."],
    ["App Service Tier", "Standard = Autoscale/Slots/SSL. Premium = VNet-Integration."],
  ]},
  { domain: "Messaging", abbr: "MSG", tag: "Nachrichten", points: [
    ["Enterprise Messaging", "Service Bus (Queues, Topics, DLQ, Sessions)."],
    ["Hochvolumige Streams", "Event Hubs (Telemetrie, Kafka-kompatibel)."],
    ["Reaktive Events", "Event Grid (Azure-Service-Events, Pub/Sub)."],
    ["Einfach & günstig", "Azure Queue Storage (ohne Enterprise-Features)."],
    ["Entkopplung Pub/Sub", "Service Bus Topics oder Event Grid."],
  ]},
  { domain: "Migration", abbr: "MIG", tag: "In die Cloud", points: [
    ["Discovery & Assessment", "Azure Migrate (Inventar, Abhängigkeiten, Sizing)."],
    ["CAF-Reihenfolge", "Strategy → Plan → Ready → Adopt → Govern/Manage."],
    ["DB minimale Downtime", "Database Migration Service (Online-Modus)."],
    ["6 R's", "Rehost (1:1) · Replatform · Refactor · Retire/Retain."],
    ["Große Datenmengen", "Azure Data Box (offline-Transfer)."],
  ]},
  { domain: "Architecture", abbr: "ARC", tag: "Zielbild & WAF", points: [
    ["Bewertungsframework", "Well-Architected: Reliability, Security, Cost, Operations, Performance."],
    ["Landing Zone", "Governance + Identity + Connectivity + Management + Security Baseline."],
    ["Active-Active global", "Front Door + identische Deployments in zwei Regionen."],
    ["Entkoppelte Services", "Pub/Sub via Service Bus Topics / Event Grid."],
    ["Resilienz-Pillar", "HA/DR/RTO/RPO → Reliability."],
    ["Kosten maximal senken", "Reserved + Spot + Hybrid Benefit + Right-Sizing."],
  ]},
  { domain: "Security", abbr: "SEC", tag: "Schutz & SOC", points: [
    ["Secrets/Keys/Zertifikate", "Key Vault (RBAC empfohlen, mit Audit)."],
    ["Posture & Secure Score", "Defender for Cloud (CSPM + CWPP)."],
    ["SIEM / SOAR", "Microsoft Sentinel (Threat Detection, Playbooks)."],
    ["Kunde kontrolliert Schlüssel", "Customer-Managed Keys (CMK) in Key Vault."],
    ["JIT-Adminzugriff", "Defender JIT VM Access (Ports nur on demand)."],
    ["Least Privilege", "Custom RBAC + PIM + Conditional Access."],
  ]},
  { domain: "Integration", abbr: "INT", tag: "Verbinden", points: [
    ["Low-Code-Workflows", "Logic Apps (400+ Connectoren)."],
    ["Zentrales API-Gateway", "API Management (Auth, Rate Limiting, Developer Portal)."],
    ["Cloud → On-Prem-Daten", "On-Premises Data Gateway (ohne VPN/ExpressRoute)."],
    ["Code vs Workflow", "Functions = Code/Event · Logic Apps = Workflow."],
    ["ETL / Datenpipelines", "Data Factory (Batch) vs Logic Apps (Prozess)."],
  ]},
];

// ============================================================
// STATE
// ============================================================
const state = {
  tasks:      JSON.parse(localStorage.getItem("az305Tasks")      || "{}"),
  labs:       JSON.parse(localStorage.getItem("az305Labs")       || "{}"),
  programs:   JSON.parse(localStorage.getItem("az305Programs")   || "{}"),
  teams:      JSON.parse(localStorage.getItem("az305Teams")      || "{}"),
  bookmarks:  JSON.parse(localStorage.getItem("az305Bookmarks")  || "{}"),
  quizHistory:JSON.parse(localStorage.getItem("az305History")    || "[]"),
  domainStats:JSON.parse(localStorage.getItem("az305DomainStats")|| "{}"),
  srs:        JSON.parse(localStorage.getItem("az305Srs")        || "{}"),
  darkMode:   localStorage.getItem("az305DarkMode") === "true",
  onboarded:  localStorage.getItem("az305Onboarded") === "true",
};

function saveState() {
  localStorage.setItem("az305Tasks",      JSON.stringify(state.tasks));
  localStorage.setItem("az305Labs",       JSON.stringify(state.labs));
  localStorage.setItem("az305Programs",   JSON.stringify(state.programs));
  localStorage.setItem("az305Teams",      JSON.stringify(state.teams));
  localStorage.setItem("az305Bookmarks",  JSON.stringify(state.bookmarks));
  localStorage.setItem("az305History",    JSON.stringify(state.quizHistory));
  localStorage.setItem("az305DomainStats",JSON.stringify(state.domainStats));
  localStorage.setItem("az305Srs",        JSON.stringify(state.srs));
  localStorage.setItem("az305DarkMode",   state.darkMode);
  localStorage.setItem("az305Onboarded",  state.onboarded);
}

// ============================================================
// SPACED REPETITION (Leitner-Box-System)
// Box 1..5 -> Intervalle in Tagen. Richtig = Box hoch, falsch = zurueck auf 1.
// ============================================================
const SRS_INTERVALS = { 1: 0, 2: 1, 3: 3, 4: 7, 5: 16 };
const DAY_MS = 86400000;

function srsUpdate(qIdx, correct) {
  const now = Date.now();
  const entry = state.srs[qIdx] || { box: 1, due: now, seen: 0 };
  entry.seen++;
  entry.box = correct ? Math.min(5, entry.box + 1) : 1;
  entry.due = now + SRS_INTERVALS[entry.box] * DAY_MS;
  entry.last = now;
  state.srs[qIdx] = entry;
  saveState();
}

function srsDueIndices() {
  const now = Date.now();
  return questions
    .map((_, i) => i)
    .filter(i => {
      const e = state.srs[i];
      return !e || e.due <= now; // neue oder faellige Fragen
    });
}

function srsDueCount() {
  // Nur Fragen zaehlen, die schon mindestens einmal gesehen wurden und jetzt faellig sind.
  const now = Date.now();
  return Object.keys(state.srs).filter(i => state.srs[i].due <= now).length;
}

function srsMastered() {
  return Object.values(state.srs).filter(e => e.box >= 5).length;
}

// ============================================================
// QUIZ STATE
// ============================================================
let activeQuestion = 0;
let currentQuiz = [];
let answers = {};
let examMode = false;
let examTimer = null;
let examTimeLeft = 7200;
let quizDomainFilter = "";
let quizBookmarkMode = false;
let quizSrsMode = false;
let quizResultSaved = false;

// ============================================================
// DARK MODE
// ============================================================
function applyDarkMode() {
  document.documentElement.classList.toggle("dark", state.darkMode);
  const btn = document.getElementById("darkToggle");
  if (btn) btn.textContent = state.darkMode ? "☀ Hell" : "◑ Dark";
}

function toggleDarkMode() {
  state.darkMode = !state.darkMode;
  saveState();
  applyDarkMode();
}

// ============================================================
// NAVIGATION
// ============================================================
function setView(viewId) {
  document.querySelectorAll(".view").forEach(v => v.classList.toggle("active", v.id === viewId));
  document.querySelectorAll(".nav-tab").forEach(t => t.classList.toggle("active", t.dataset.view === viewId));
  if (viewId === "analytics") renderAnalytics();
}

// ============================================================
// SPRINT DASHBOARD
// ============================================================
function renderDays() {
  const list = document.getElementById("dayList");
  list.innerHTML = sprintDays.map(day => {
    const tasks = day.tasks.map((task, i) => {
      const key = `day-${day.day}-${i}`;
      return `<label><input type="checkbox" data-task="${key}" ${state.tasks[key] ? "checked" : ""}>${task}</label>`;
    }).join("");
    return `<article class="day-item">
      <div class="day-number">Tag ${String(day.day).padStart(2, "0")}</div>
      <div><h3>${day.title}</h3><p>${day.focus}</p><div class="tasks">${tasks}</div></div>
      <span class="tag">${day.tasks.length} Tasks</span>
    </article>`;
  }).join("");
  list.querySelectorAll("[data-task]").forEach(cb => {
    cb.addEventListener("change", e => {
      state.tasks[e.target.dataset.task] = e.target.checked;
      saveState();
      updateProgress();
    });
  });
}

function updateProgress() {
  const total = sprintDays.reduce((s, d) => s + d.tasks.length, 0);
  const done = Object.values(state.tasks).filter(Boolean).length;
  const pct = Math.round((done / total) * 100);
  document.getElementById("progressPercent").textContent = `${pct}%`;
  const ring = document.querySelector(".score-ring");
  if (ring) ring.style.setProperty("--p", pct);
}

// ============================================================
// QUIZ
// ============================================================
function shuffle(items) {
  return [...items].sort(() => Math.random() - 0.5);
}

function getQuizPool() {
  if (quizSrsMode) {
    const due = srsDueIndices().map(i => questions[i]);
    return due.length > 0 ? due : questions;
  }
  if (quizBookmarkMode) {
    const b = questions.filter((_, i) => state.bookmarks[i]);
    return b.length > 0 ? b : questions;
  }
  if (quizDomainFilter) {
    const f = questions.filter(q => q.domain === quizDomainFilter);
    return f.length > 0 ? f : questions;
  }
  return questions;
}

function startQuiz(isExam) {
  examMode = !!isExam;
  quizResultSaved = false;
  clearInterval(examTimer);

  const pool = examMode ? questions : getQuizPool();
  const count = examMode ? Math.min(50, pool.length) : Math.min(10, pool.length);
  currentQuiz = shuffle(pool).slice(0, count);
  activeQuestion = 0;
  answers = {};

  const timerBox = document.getElementById("examTimerBox");
  const modeLabel = document.getElementById("quizModeLabel");
  if (examMode) {
    examTimeLeft = 7200;
    if (timerBox) timerBox.style.display = "flex";
    if (modeLabel) modeLabel.textContent = `Exam Simulation — ${count} Fragen · 120 min`;
    startExamTimer();
  } else {
    if (timerBox) timerBox.style.display = "none";
    const label = quizSrsMode ? "Wiederholung (faellig)"
      : quizBookmarkMode ? "Gemerkte Fragen"
      : (quizDomainFilter || "Alle Domains");
    if (modeLabel) modeLabel.textContent = `Case Drill · ${label}`;
  }
  renderQuestion();
}

function startExamTimer() {
  updateTimerDisplay();
  examTimer = setInterval(() => {
    examTimeLeft--;
    updateTimerDisplay();
    if (examTimeLeft <= 0) { clearInterval(examTimer); updateQuizScore(); }
  }, 1000);
}

function updateTimerDisplay() {
  const el = document.getElementById("examTimerCount");
  if (!el) return;
  const m = Math.floor(examTimeLeft / 60).toString().padStart(2, "0");
  const s = (examTimeLeft % 60).toString().padStart(2, "0");
  el.textContent = `${m}:${s}`;
  el.classList.toggle("timer-warning", examTimeLeft <= 600);
}

function renderQuestion() {
  if (!currentQuiz.length) return;
  const q = currentQuiz[activeQuestion];
  const sel = answers[activeQuestion];
  const qIdx = questions.indexOf(q);

  document.getElementById("questionCounter").textContent = `Frage ${activeQuestion + 1}/${currentQuiz.length}`;
  document.getElementById("questionDomain").textContent = q.domain;
  document.getElementById("questionText").textContent = q.text;

  const bBtn = document.getElementById("bookmarkBtn");
  if (bBtn) {
    const marked = !!state.bookmarks[qIdx];
    bBtn.textContent = marked ? "★ Markiert" : "☆ Merken";
    bBtn.dataset.qindex = qIdx;
    bBtn.className = "bookmark-btn" + (marked ? " bookmarked" : "");
  }

  document.getElementById("answerList").innerHTML = q.answers.map((ans, i) => {
    let cls = "";
    if (sel !== undefined) {
      if (i === q.correct) cls = "correct";
      else if (i === sel) cls = "incorrect";
    }
    return `<label class="answer-option ${cls}">
      <input type="radio" name="answer" value="${i}" ${sel === i ? "checked" : ""}>
      <span>${ans}</span>
    </label>`;
  }).join("");

  document.querySelectorAll("input[name='answer']").forEach(r => {
    r.addEventListener("change", e => {
      const idx = Number(e.target.value);
      const isFirst = answers[activeQuestion] === undefined;
      answers[activeQuestion] = idx;
      if (isFirst) {
        updateDomainStats(q, idx);
        srsUpdate(questions.indexOf(q), idx === q.correct);
        updateSrsBadge();
      }
      renderQuestion();
      updateQuizScore();
    });
  });

  document.getElementById("prevQuestion").disabled = activeQuestion === 0;
  document.getElementById("nextQuestion").textContent =
    activeQuestion === currentQuiz.length - 1 ? "Auswertung" : "Weiter";
  document.getElementById("explanationBox").textContent =
    sel === undefined ? "Antwort waehlen — dann erscheint die Begruendung." : q.explanation;

  updateQuizScore();
}

function updateDomainStats(q, sel) {
  const d = q.domain;
  if (!state.domainStats[d]) state.domainStats[d] = { correct: 0, total: 0 };
  state.domainStats[d].total++;
  if (sel === q.correct) state.domainStats[d].correct++;
  saveState();
}

function updateQuizScore() {
  const answered = Object.keys(answers).length;
  const correct = currentQuiz.filter((q, i) => answers[i] === q.correct).length;
  document.getElementById("quizScore").textContent = `${correct}/${currentQuiz.length}`;
  let fb;
  if (answered < currentQuiz.length) {
    fb = `${answered} beantwortet. Denk wie ein Architekt: Service, Trade-off, Risiko.`;
  } else {
    const pct = correct / currentQuiz.length;
    fb = pct >= 0.8
      ? `Stark! ${Math.round(pct * 100)}% — Jetzt Fehler erklaeren koennen, nicht nur merken.`
      : `${Math.round(pct * 100)}% — Noch nicht pruefungsreif. Schwache Domains in Analytics pruefen.`;
    if (!quizResultSaved) {
      quizResultSaved = true;
      saveQuizToHistory(correct, currentQuiz.length);
    }
  }
  document.getElementById("quizFeedback").textContent = fb;
}

function saveQuizToHistory(correct, total) {
  state.quizHistory.unshift({
    date: new Date().toLocaleDateString("de-DE"),
    score: correct, total,
    percent: Math.round((correct / total) * 100),
    mode: examMode ? "Exam" : "Drill",
  });
  if (state.quizHistory.length > 20) state.quizHistory.length = 20;
  saveState();
}

function toggleBookmark(qIdx) {
  if (state.bookmarks[qIdx]) delete state.bookmarks[qIdx];
  else state.bookmarks[qIdx] = true;
  saveState();
  renderQuestion();
}

// ============================================================
// DOMAIN FILTER
// ============================================================
function renderDomainFilter() {
  const container = document.getElementById("domainFilter");
  if (!container) return;
  const domains = [...new Set(questions.map(q => q.domain))].sort();
  const dueN = srsDueCount();
  container.innerHTML =
    `<button class="filter-btn filter-srs" data-domain="__srs__">⟳ Wiederholen (${dueN})</button>` +
    `<button class="filter-btn active" data-domain="">Alle (${questions.length})</button>` +
    domains.map(d => {
      const n = questions.filter(q => q.domain === d).length;
      return `<button class="filter-btn" data-domain="${d}">${d} (${n})</button>`;
    }).join("") +
    `<button class="filter-btn filter-bookmark" data-domain="__bm__">★ Gemerkt</button>`;
  container.querySelectorAll(".filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      container.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const d = btn.dataset.domain;
      quizSrsMode = d === "__srs__";
      quizBookmarkMode = d === "__bm__";
      quizDomainFilter = (quizSrsMode || quizBookmarkMode) ? "" : d;
    });
  });
}

function updateSrsBadge() {
  const btn = document.querySelector(".filter-srs");
  if (btn) btn.textContent = `⟳ Wiederholen (${srsDueCount()})`;
}

// ============================================================
// DECISION CARDS
// ============================================================
function renderDecisionCards(filter) {
  const norm = (filter || "").trim().toLowerCase();
  const visible = decisionCards.filter(c =>
    [c.title, c.body, ...c.tags].join(" ").toLowerCase().includes(norm)
  );
  document.getElementById("decisionCards").innerHTML = visible.map(c => `
    <article class="decision-card">
      <h3>${c.title}</h3>
      <span>${c.body}</span>
      <div class="tag-row">${c.tags.map(t => `<span class="tag">${t}</span>`).join("")}</div>
    </article>`).join("");
}

// ============================================================
// CHEATSHEET
// ============================================================
function renderCheatsheet() {
  const el = document.getElementById("cheatsheetContent");
  if (!el) return;
  el.innerHTML = cheatsheet.map(s => `
    <article class="sheet-page">
      <div class="sheet-head">
        <div class="sheet-badge">${s.abbr}</div>
        <div><h3>${s.domain}</h3><small>${s.tag}</small></div>
      </div>
      ${s.points.map(([k, v]) => `
        <div class="sheet-item"><span class="sheet-key">${k}</span><span class="sheet-val">${v}</span></div>`).join("")}
      <p class="sheet-foot">AZ-305 · Architect OS · Spickzettel · by Tarek</p>
    </article>`).join("");
}

// ============================================================
// ANALYTICS
// ============================================================
function renderAnalytics() {
  const st = state.domainStats;
  const domains = Object.keys(st);
  const totalAns = domains.reduce((s, d) => s + st[d].total, 0);
  const totalCor = domains.reduce((s, d) => s + st[d].correct, 0);
  const ovPct = totalAns > 0 ? Math.round((totalCor / totalAns) * 100) : 0;
  const weak = domains.filter(d => st[d].correct / st[d].total < 0.6);

  document.getElementById("analyticsOverall").textContent  = totalAns > 0 ? `${ovPct}%` : "—";
  document.getElementById("analyticsAnswered").textContent = totalAns;
  document.getElementById("analyticsMastered").textContent = `${srsMastered()}/${questions.length}`;
  document.getElementById("analyticsWeak").textContent     = totalAns === 0 ? "—" : weak.length > 0 ? weak.join(", ") : "Keine — sehr gut!";

  const chartEl = document.getElementById("domainChart");
  chartEl.innerHTML = domains.length === 0
    ? `<p class="no-data">Noch keine Daten. Starte einen Case Drill.</p>`
    : domains.sort((a, b) => (st[a].correct / st[a].total) - (st[b].correct / st[b].total)).map(d => {
        const { correct, total } = st[d];
        const pct = Math.round((correct / total) * 100);
        const cls = pct >= 80 ? "bar-good" : pct >= 60 ? "bar-medium" : "bar-weak";
        return `<div class="chart-row">
          <span class="chart-label">${d}</span>
          <div class="chart-bar-bg"><div class="chart-bar ${cls}" style="width:${pct}%"></div></div>
          <span class="chart-pct ${pct < 60 ? "pct-weak" : pct >= 80 ? "pct-good" : ""}">${pct}% (${correct}/${total})</span>
        </div>`;
      }).join("");

  const histEl = document.getElementById("historyList");
  histEl.innerHTML = state.quizHistory.length === 0
    ? `<p class="no-data">Noch keine abgeschlossenen Runden.</p>`
    : state.quizHistory.map(e => {
        const cls = e.percent >= 80 ? "bar-good" : e.percent >= 60 ? "bar-medium" : "bar-weak";
        return `<div class="history-row">
          <span class="chart-label">${e.date}</span>
          <span class="pill">${e.mode}</span>
          <div class="chart-bar-bg"><div class="chart-bar ${cls}" style="width:${e.percent}%"></div></div>
          <span class="chart-pct ${e.percent >= 80 ? "pct-good" : e.percent < 60 ? "pct-weak" : ""}">${e.percent}%</span>
        </div>`;
      }).join("");
}

// ============================================================
// EXPORT / IMPORT
// ============================================================
function exportProgress() {
  const data = {
    version: "2.0", exported: new Date().toISOString(),
    tasks: state.tasks, labs: state.labs, programs: state.programs, teams: state.teams,
    bookmarks: state.bookmarks, quizHistory: state.quizHistory, domainStats: state.domainStats,
    srs: state.srs,
  };
  const a = document.createElement("a");
  a.href = URL.createObjectURL(new Blob([JSON.stringify(data, null, 2)], { type: "application/json" }));
  a.download = `az305-progress-${new Date().toISOString().slice(0, 10)}.json`;
  document.body.appendChild(a); a.click(); document.body.removeChild(a);
}

function importProgress(file) {
  const reader = new FileReader();
  reader.onload = e => {
    try {
      const d = JSON.parse(e.target.result);
      if (d.tasks) state.tasks = d.tasks;
      if (d.labs) state.labs = d.labs;
      if (d.programs) state.programs = d.programs;
      if (d.teams) state.teams = d.teams;
      if (d.bookmarks) state.bookmarks = d.bookmarks;
      if (d.quizHistory) state.quizHistory = d.quizHistory;
      if (d.domainStats) state.domainStats = d.domainStats;
      if (d.srs) state.srs = d.srs;
      saveState();
      renderDays(); updateProgress(); renderDomainFilter();
      bindStoredCheckboxes("[data-lab]", "labs");
      bindStoredCheckboxes("[data-program]", "programs");
      bindStoredCheckboxes("[data-team]", "teams");
      alert("Progress erfolgreich importiert!");
    } catch { alert("Fehler: Ungueltige JSON-Datei."); }
  };
  reader.readAsText(file);
}

// ============================================================
// HELPERS
// ============================================================
function bindStoredCheckboxes(selector, bucket) {
  document.querySelectorAll(selector).forEach(cb => {
    cb.checked = Boolean(state[bucket][cb.dataset[bucket.slice(0, -1)]]);
    cb.addEventListener("change", e => {
      state[bucket][e.target.dataset[bucket.slice(0, -1)]] = e.target.checked;
      saveState();
    });
  });
}

async function copyTextFromElement(elId, btnId, label) {
  const text = document.getElementById(elId).textContent.trim().replace(/\s+/g, " ");
  if (navigator.clipboard) await navigator.clipboard.writeText(text);
  else { const t = document.createElement("textarea"); t.value = text; document.body.appendChild(t); t.select(); document.execCommand("copy"); t.remove(); }
  document.getElementById(btnId).textContent = "Kopiert";
  setTimeout(() => { document.getElementById(btnId).textContent = label; }, 1400);
}

// ============================================================
// EVENT LISTENERS
// ============================================================
document.querySelectorAll(".nav-tab").forEach(t => t.addEventListener("click", () => setView(t.dataset.view)));

document.getElementById("resetProgress").addEventListener("click", () => {
  if (!confirm("Sprint-Fortschritt wirklich zuruecksetzen?")) return;
  state.tasks = {}; saveState(); renderDays(); updateProgress();
});

document.getElementById("newQuiz").addEventListener("click", () => startQuiz(false));
document.getElementById("startExam").addEventListener("click", () => startQuiz(true));

document.getElementById("prevQuestion").addEventListener("click", () => { activeQuestion = Math.max(0, activeQuestion - 1); renderQuestion(); });
document.getElementById("nextQuestion").addEventListener("click", () => { activeQuestion = Math.min(currentQuiz.length - 1, activeQuestion + 1); renderQuestion(); });

document.getElementById("bookmarkBtn").addEventListener("click", e => {
  const idx = Number(e.currentTarget.dataset.qindex);
  if (!isNaN(idx)) toggleBookmark(idx);
});

document.getElementById("cardSearch").addEventListener("input", e => renderDecisionCards(e.target.value));
document.getElementById("printCheatsheet").addEventListener("click", () => window.print());
document.getElementById("copyManagerPitch").addEventListener("click", () => copyTextFromElement("managerPitchText", "copyManagerPitch", "Pilot Brief kopieren"));
document.getElementById("darkToggle").addEventListener("click", toggleDarkMode);
document.getElementById("exportBtn").addEventListener("click", exportProgress);
document.getElementById("importBtn").addEventListener("click", () => document.getElementById("importInput").click());
document.getElementById("importInput").addEventListener("change", e => { if (e.target.files[0]) importProgress(e.target.files[0]); e.target.value = ""; });
document.getElementById("resetStats").addEventListener("click", () => {
  if (!confirm("Alle Quiz-Statistiken und Wiederholungs-Fortschritt zuruecksetzen?")) return;
  state.domainStats = {}; state.quizHistory = []; state.srs = {};
  saveState(); renderAnalytics(); renderDomainFilter();
});

// ============================================================
// ONBOARDING
// ============================================================
function dismissOnboarding() {
  document.getElementById("onboarding").style.display = "none";
  state.onboarded = true;
  saveState();
}

function maybeShowOnboarding() {
  if (!state.onboarded) document.getElementById("onboarding").style.display = "grid";
}

document.getElementById("onboardStart").addEventListener("click", dismissOnboarding);
document.getElementById("onboardSkip").addEventListener("click", dismissOnboarding);

// ============================================================
// INIT
// ============================================================
applyDarkMode();
renderDays();
updateProgress();
renderDecisionCards();
renderCheatsheet();
renderDomainFilter();
startQuiz(false);
bindStoredCheckboxes("[data-lab]", "labs");
bindStoredCheckboxes("[data-program]", "programs");
bindStoredCheckboxes("[data-team]", "teams");
maybeShowOnboarding();
