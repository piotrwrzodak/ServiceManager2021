/****** Object:  Table [dbo].[klienci]    Script Date: 06.06.2021 21:28:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[klienci](
	[id_klienta] [smallint] IDENTITY(1,1) NOT NULL,
	[imie] [nvarchar](255) NOT NULL,
	[nazwisko] [nvarchar](255) NOT NULL,
	[nr_tel] [int] NOT NULL,
	[nazwa] [nvarchar](255) NULL,
	[NIP] [bigint] NULL,
	[e-mail] [nvarchar](255) NULL,
 CONSTRAINT [PK_klienci] PRIMARY KEY CLUSTERED 
(
	[id_klienta] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[urzadzenia]    Script Date: 06.06.2021 21:28:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[urzadzenia](
	[id] [smallint] IDENTITY(1,1) NOT NULL,
	[type] [nvarchar](50) NOT NULL,
	[brand] [nvarchar](50) NOT NULL,
	[model] [nvarchar](50) NOT NULL,
 CONSTRAINT [PK_urzadzenia] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[uzytkownicy]    Script Date: 06.06.2021 21:28:54 ******/
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
	[imie] [nvarchar](50) NOT NULL,
	[nazwisko] [nvarchar](50) NOT NULL,
 CONSTRAINT [PK_uzytkownicy] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[zlecenia]    Script Date: 06.06.2021 21:28:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[zlecenia](
	[RMA] [smallint] IDENTITY(1,1) NOT NULL,
	[id_klienta] [smallint] NOT NULL,
	[data_przyjecia] [datetime] NOT NULL,
	[rodzaj] [nvarchar](255) NOT NULL,
	[marka] [nvarchar](255) NOT NULL,
	[model] [nvarchar](255)NOT NULL,
	[usterka] [nvarchar](255)NOT NULL,
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
