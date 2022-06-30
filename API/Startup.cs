using Microsoft.OpenApi.Models;
using Repositories.Command;
using Services.Command_Services;

namespace API
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {

            //var appSettingsSection = Configuration.GetSection("AppSettings");
            //services.Configure<DTOConfig>(appSettingsSection);
            //var appSettings = appSettingsSection.Get<DTOConfig>();



            //add cors policy
            services.AddCors(options =>
            {
                options.AddPolicy("CorsPolicy",
                builder =>
                {
                    builder.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader();
                });
            });

            //Configure Swagger
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "Asset Managment", Version = "v1" });
            });

            services.AddSwaggerGen();

           services.AddRepositories(this.Configuration);
           services.AddServices();


            services.AddMvcCore()
                    .AddApiExplorer();



        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment() || env.IsProduction())
            {
                app.UseDeveloperExceptionPage();
                app.UseSwagger();
                app.UseSwaggerUI(c =>
                {
                    c.SwaggerEndpoint("/swagger/v1/swagger.json", "Employee API V1");
                });

            }

            app.UseHttpsRedirection();
            app.UseDefaultFiles();
            app.UseStaticFiles(); // For the wwwroot folder.
            app.UseFileServer(new FileServerOptions
            {
                EnableDefaultFiles = true,
                EnableDirectoryBrowsing = true,
            });

            app.UseRouting();
            app.UseCors(
            options => options.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader()
           );
            app.UseCors("CorsPolicy");

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllerRoute(
                    name: "default",
                    pattern: "{controller}/{action=Index}/{id?}");
            });

        }
    }
}
