USE [SM2021]
GO
SET IDENTITY_INSERT [dbo].[uzytkownicy] ON 

INSERT [dbo].[uzytkownicy] ([id], [rodzaj_uzytkownika], [login], [haslo], [nr_tel], [imie], [nazwisko]) VALUES (2, 1, N'admin1', N'admin1', 789123654, NULL, NULL)
INSERT [dbo].[uzytkownicy] ([id], [rodzaj_uzytkownika], [login], [haslo], [nr_tel], [imie], [nazwisko]) VALUES (3, 1, N'admin', N'admin', 123456789, NULL, NULL)
SET IDENTITY_INSERT [dbo].[uzytkownicy] OFF
GO
