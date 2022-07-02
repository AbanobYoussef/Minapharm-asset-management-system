using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Entities.Migrations
{
    public partial class chang : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_DeviceAssets_Employees_EmployeeId1",
                table: "DeviceAssets");

            migrationBuilder.DropForeignKey(
                name: "FK_TransportAssets_Employees_EmployeeId1",
                table: "TransportAssets");

            migrationBuilder.DropIndex(
                name: "IX_TransportAssets_EmployeeId1",
                table: "TransportAssets");

            migrationBuilder.DropIndex(
                name: "IX_DeviceAssets_EmployeeId1",
                table: "DeviceAssets");

            migrationBuilder.DropColumn(
                name: "EmployeeId1",
                table: "TransportAssets");

            migrationBuilder.DropColumn(
                name: "EmployeeId1",
                table: "DeviceAssets");

            migrationBuilder.RenameColumn(
                name: "EmployeeId",
                table: "TransportAssets",
                newName: "DriverId");

            migrationBuilder.RenameColumn(
                name: "EmployeeId",
                table: "DeviceAssets",
                newName: "OwnerId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "DriverId",
                table: "TransportAssets",
                newName: "EmployeeId");

            migrationBuilder.RenameColumn(
                name: "OwnerId",
                table: "DeviceAssets",
                newName: "EmployeeId");

            migrationBuilder.AddColumn<Guid>(
                name: "EmployeeId1",
                table: "TransportAssets",
                type: "uniqueidentifier",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"));

            migrationBuilder.AddColumn<Guid>(
                name: "EmployeeId1",
                table: "DeviceAssets",
                type: "uniqueidentifier",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"));

            migrationBuilder.CreateIndex(
                name: "IX_TransportAssets_EmployeeId1",
                table: "TransportAssets",
                column: "EmployeeId1");

            migrationBuilder.CreateIndex(
                name: "IX_DeviceAssets_EmployeeId1",
                table: "DeviceAssets",
                column: "EmployeeId1");

            migrationBuilder.AddForeignKey(
                name: "FK_DeviceAssets_Employees_EmployeeId1",
                table: "DeviceAssets",
                column: "EmployeeId1",
                principalTable: "Employees",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_TransportAssets_Employees_EmployeeId1",
                table: "TransportAssets",
                column: "EmployeeId1",
                principalTable: "Employees",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
