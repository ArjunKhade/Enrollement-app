using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace backendapi.Migrations
{
    /// <inheritdoc />
    public partial class init1 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Subscription",
                table: "Users");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "Subscription",
                table: "Users",
                type: "bit",
                nullable: false,
                defaultValue: false);
        }
    }
}
