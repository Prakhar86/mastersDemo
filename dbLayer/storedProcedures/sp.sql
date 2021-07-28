-- ================================================
-- Template generated from Template Explorer using:
-- Create Procedure (New Menu).SQL
--
-- Use the Specify Values for Template Parameters
-- command (Ctrl-Shift-M) to fill in the parameter
-- values below.
--
-- This block of comments will not be included in
-- the definition of the procedure.
-- ================================================
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
ALTER PROCEDURE [dbo].[InsertProduct]
	@name varchar(100),
	@category varchar(100),
	@subcategory varchar(100)
AS
BEGIN

Declare @catId int, @subCatId int

	Set @catId = (Select ID from Category where Name = @category)
	IF((@catId) IS NOT NULL)
	BEGIN
	Set @subCatId = (Select ID from SubCategory where Name = @subcategory)
	IF((@subCatId) IS NOT NULL)
	BEGIN
	INSERT INTO Product
	(Name, CategoryId, SubCategoryId)
	Values(@name, @catId, @subCatId)
	END
	END
END
GO
