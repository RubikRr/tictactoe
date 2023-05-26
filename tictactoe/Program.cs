using Microsoft.EntityFrameworkCore;
using static tictactoe.DatabaseContext;
using tictactoe.Models;

namespace tictactoe
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);
            string connection = "Server=(localdb)\\mssqllocaldb;Database=tictactoe;Trusted_Connection=True;";


            builder.Services.AddDbContext<DatabaseContext>(options => options.UseSqlServer(connection));


            //// Add services to the container.
            builder.Services.AddControllersWithViews();

            var app = builder.Build();

            // Configure the HTTP request pipeline.
            if (!app.Environment.IsDevelopment())
            {
                app.UseExceptionHandler("/Home/Error");
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }

            app.UseHttpsRedirection();
            app.UseStaticFiles();

            app.UseRouting();

            app.UseAuthorization();

            app.MapControllerRoute(
                name: "default",
                pattern: "{controller=Home}/{action=Index}/{id?}");



            app.Run();
            
        }
    }
}