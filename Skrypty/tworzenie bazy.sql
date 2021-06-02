USE [SM2021]
GO
/****** Object:  Table [dbo].[klienci]    Script Date: 02.06.2021 09:57:05 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[klienci](
	[id_klienta] [smallint] IDENTITY(1,1) NOT NULL,
	[imie] [nvarchar](255) NULL,
	[nazwisko] [nvarchar](255) NULL,
	[nr_tel] [int] NULL,
	[nazwa] [nvarchar](255) NULL,
	[NIP] [bigint] NULL,
	[e-mail] [nvarchar](255) NULL,
 CONSTRAINT [PK_klienci] PRIMARY KEY CLUSTERED 
(
	[id_klienta] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[uzytkownicy]    Script Date: 02.06.2021 09:57:05 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[uzytkownicy](
	[id] [smallint] IDENTITY(1,1) NOT NULL,
	[rodzaj_uzytkownika] [smallint] NOT NULL,
	[login] [nvarchar](30) NOT NULL,
	[haslo] [nvarchar](30) NOT NULL,
	[nr_tel] [int] NULL,
	[imie] [nvarchar](50) NULL,
	[nazwisko] [nvarchar](50) NULL,
 CONSTRAINT [PK_uzytkownicy] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[zlecenia]    Script Date: 02.06.2021 09:57:05 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[zlecenia](
	[RMA] [smallint] IDENTITY(1,1) NOT NULL,
	[id_klienta] [smallint] NULL,
	[data_przyjecia] [datetime] NULL,
	[rodzaj] [nvarchar](255) NULL,
	[marka] [nvarchar](255) NULL,
	[model] [nvarchar](255) NULL,
	[usterka] [nvarchar](255) NULL,
	[koszt_naprawy] [money] NULL,
	[koszt_czesci] [money] NULL,
	[data_wydania] [datetime] NULL,
	[status] [nvarchar](255) NULL,
	[informacje] [nvarchar](255) NULL,
 CONSTRAINT [PK_zlecenia] PRIMARY KEY CLUSTERED 
(
	[RMA] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[zlecenia] ADD  DEFAULT (getdate()) FOR [data_przyjecia]
GO
ALTER TABLE [dbo].[zlecenia]  WITH CHECK ADD FOREIGN KEY([id_klienta])
REFERENCES [dbo].[klienci] ([id_klienta])
GO
